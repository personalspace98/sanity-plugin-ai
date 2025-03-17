import {
  ActionFromReducersMapObject,
  combineReducers,
  StateFromReducersMapObject,
} from '@reduxjs/toolkit'
import {Reducer} from 'react'
import {combineEpics} from 'redux-observable'

import promptFieldBasedReducer, {clearPromptFieldBased} from '../modules/promptFieldBased'
import dialogReducer, {clearModifyDialog} from './dialogs'
import geminiReducer, {generateGeminiPromptEpic, setIsConfiguredEpic} from './gemini'
import notificationReducer, {
  notificationsGenericErrorEpic,
  notificationsTemplateCreateCompleteEpic,
  notificationTemplateDeleteEpic,
  notificationTemplateUpdateEpic,
} from './notifications'
import openAiReducer, {generateOpenAiPromptEpic} from './openai'
import promptPlaceholders, {clearPromptPlaceholders} from './promptPlaceholders'
import templatesReducer, {
  filterTemplatesEpic,
  templateCreateEpic,
  templateDeleteEpic,
  templateFetchNextPageEpic,
  templatesFetchEpic,
  templatesFetchPageIndexEpic,
  templateUpdateEpic,
} from './templates'
import generatedImageReducer, {uploadImage} from './uploadImage'

export const rootEpic = combineEpics(
  templateCreateEpic,
  notificationsTemplateCreateCompleteEpic,
  notificationTemplateUpdateEpic,
  notificationTemplateDeleteEpic,
  notificationsGenericErrorEpic,
  templatesFetchPageIndexEpic,
  templatesFetchEpic,
  templateUpdateEpic,
  templateDeleteEpic,
  templateFetchNextPageEpic,
  generateGeminiPromptEpic,
  clearPromptPlaceholders,
  clearModifyDialog,
  filterTemplatesEpic,
  generateOpenAiPromptEpic,
  uploadImage,
  setIsConfiguredEpic,
  clearPromptFieldBased,
)

export const rootReducers = {
  gemini: geminiReducer,
  openAi: openAiReducer,
  templates: templatesReducer,
  dialog: dialogReducer,
  notifications: notificationReducer,
  promptPlaceholders: promptPlaceholders,
  generatedImage: generatedImageReducer,
  promptFieldBased: promptFieldBasedReducer,
}

type ReducersMapObject = typeof rootReducers
export const rootReducer: Reducer<
  StateFromReducersMapObject<ReducersMapObject>,
  ActionFromReducersMapObject<ReducersMapObject>
> = combineReducers(rootReducers)
