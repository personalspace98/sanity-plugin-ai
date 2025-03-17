import {useSecrets} from '@sanity/studio-secrets'

import {defaultConfig} from '../config/ai'
import {namespaceApis} from '../config/secrets'
import {AiModelConfig, SecretsKey} from '../types'

export const useGetSecrets = (): SecretsKey => {
  return useSecrets(namespaceApis) as SecretsKey
}

export const useGetModelConfig = (getGeminiConfig: boolean): AiModelConfig | object => {
  const {secrets} = useGetSecrets()
  if (getGeminiConfig) {
    return {
      model: secrets?.geminiModel || defaultConfig.geminiModel,
      instructions: secrets?.instructions || defaultConfig.instructions,
    }
  }

  return {
    model: secrets?.openAiModel || defaultConfig.openAiModel,
    role: secrets?.role || defaultConfig.role,
  }
}
