import {definePlugin} from 'sanity'

import * as FieldIndex from './components/FieldIndex'
import * as PluginIndex from './components/PluginIndex'

export type PluginConfig = {
  geminiApiKey?: string
  openAiApiKey?: string
}

export const aiTextGenerationPlugin = definePlugin<PluginConfig>((config: PluginConfig) => {
  if (!config.geminiApiKey && !config.openAiApiKey) {
    console.error('Plugin not configured')
    return {}
  }

  return {
    name: 'sanity-plugin-sanity-ai-text-generation',
    tools: (prev) => [
      ...prev,
      {
        name: 'templates',
        title: 'X Templates',
        component: (props) => PluginIndex.PluginIndex({...props}, config),
      },
    ],
    form: {
      components: {
        input: (props) => {
          const schemaType = props.schemaType?.name
          return schemaType === 'string' || schemaType === 'text' || schemaType === 'image'
            ? FieldIndex.FieldIndex({...props}, config)
            : props.renderDefault(props)
        },
      },
    },
  }
})
