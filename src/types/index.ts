import {GoogleGenerativeAI} from '@google/generative-ai'
import {UnknownAction} from '@reduxjs/toolkit'
import {SanityClient} from '@sanity/client'
import OpenAI from 'openai'
import React from 'react'
import {Epic} from 'redux-observable'

import {RootReducerState} from '../modules/types'

export type AiModelConfig = {
  instructions?: string
  model: string
  role?: OpenAiRole
}

export type DefaultConfig = {
  geminiModel: string
  instructions: string
  openAiModel: string
  role: OpenAiRole
}

export type Dialog =
  | DialogCreatePromptProperties
  | DialogTemplateProperties
  | DialogTemplatesProperties

export type DialogCreatePromptProperties = {
  closeDialogId?: string
  footer?: string | React.ReactNode
  header?: string | React.ReactNode
  id: string
  template: Template
  type: 'dialogCreatePromptProperties'
}

export type DialogTemplateProperties = {
  closeDialogId?: string
  footer?: string | React.ReactNode
  header?: string | React.ReactNode
  id: string
  template?: Template | null
  type: 'modifyTemplateDialog' | 'confirmDeleteTemplateDialog'
}

export type DialogTemplatesProperties = {
  closeDialogId?: string
  footer?: string | React.ReactNode
  header?: string | React.ReactNode
  id: string
  templates?: Template[]
  type: 'dialogTemplates'
}

export type EpicClientProperties = {
  client: SanityClient
  geminiClient?: GoogleGenerativeAI
  openAiClient?: OpenAI
}

export type HttpError = {
  message: string
  statusCode: number
}

export type MyEpic = Epic<
  UnknownAction,
  UnknownAction,
  RootReducerState,
  {
    client: SanityClient
    geminiClient?: GoogleGenerativeAI
    openAiClient?: OpenAI
  }
>

export type OpenAiMessage = {
  prompt: string
  role: OpenAiRole
}

export type OpenAiRole = 'assistant'

export type Order = {
  direction: OrderDirection
  field: string
  title?: string
}

export type OrderDirection = 'asc' | 'desc'

export type PromptReducerState = {
  configured: boolean
  creatingError?: HttpError
  generateImage: boolean
  inProgress: boolean
  prompt: string
}

export type SecretsKey = {
  loading?: boolean
  secrets: {
    geminiApiKey?: string
    geminiModel?: string
    instructions?: string
    openAiApiKey?: string
    openAiModel?: string
    role?: OpenAiRole
  }
}

export type SecretsPluginKey = {
  key: string
  title: string
}

export type Template = {
  prompt: string
  title: string
  selected?: boolean
  _createdAt?: string
  _id?: string
  _updatedAt?: string
  promptFieldBased?: PromptFieldBased[]
  promptPlaceholders?: PromptPlaceholder[]
}

export type TextField = {
  documentName: string
  name: string
  title: string
  type: string
  value: string
  hidden?: boolean
  description?: string
}

export type PromptFieldBased = {
  fieldName: string
  documentType: string
  description?: string
}

export type PromptPlaceholder = {
  description?: string
  name: string
  deleted?: boolean
  processed?: boolean
}
