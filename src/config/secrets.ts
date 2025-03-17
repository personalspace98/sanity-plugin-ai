import {SecretsPluginKey} from '../types'

export const namespaceApis = 'aiModelConfig'
export const pluginConfigKeys: SecretsPluginKey[] = [
  {
    key: 'geminiModel',
    title: 'Gemini model (default gemini-1.5-flash)',
  },
  {
    key: 'geminiInstructions',
    title: 'Gemini instructions',
  },
  {
    key: 'openAiModel',
    title: 'OpenAI model (default gpt-3.5-turbo)',
  },
  {
    key: 'openAiRole',
    title: 'OpenAI Role',
  },
]
