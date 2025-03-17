import {GoogleGenerativeAI} from '@google/generative-ai'
import {configureStore, UnknownAction} from '@reduxjs/toolkit'
import {SanityClient} from '@sanity/client'
import OpenAI from 'openai'
import React, {ReactNode} from 'react'
import {Provider} from 'react-redux'
import {createEpicMiddleware} from 'redux-observable'

import {PluginConfig} from '../../index'
import {rootEpic, rootReducers} from '../../modules'
import {RootReducerState} from '../../modules/types'

type Props = {
  children: ReactNode
  client: SanityClient
  apiKeys: PluginConfig
}

export const ReduxProvider = (props: Props): React.ReactNode => {
  const epicMiddleware = createEpicMiddleware<UnknownAction, UnknownAction, RootReducerState>({
    dependencies: {
      client: props.client,
      openAiClient: createOpenAiClient(props.apiKeys.openAiApiKey as string),
      geminiClient: createGeminiClient(props.apiKeys.geminiApiKey as string),
    },
  })
  const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        thunk: false,
      }).prepend(epicMiddleware),
  })

  epicMiddleware.run(rootEpic)

  return <Provider store={store}> {props.children} </Provider>
}

const createOpenAiClient = (key: string) => {
  if (key) {
    return new OpenAI({
      apiKey: key,
      dangerouslyAllowBrowser: true,
    })
  }
  return undefined
}

const createGeminiClient = (key: string) => {
  if (key) {
    return new GoogleGenerativeAI(key)
  }
  return undefined
}
