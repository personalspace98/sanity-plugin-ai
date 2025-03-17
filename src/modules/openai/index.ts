import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ChatCompletion} from 'openai/resources/chat/'
import {from, of} from 'rxjs'
import {catchError, filter, mergeMap, withLatestFrom} from 'rxjs/operators'

import {
  EpicClientProperties,
  HttpError,
  MyEpic,
  OpenAiMessage,
  OpenAiRole,
  PromptReducerState,
  Template,
} from '../../types'
import {generateImageActions} from '../uploadImage'

const initialState = {
  inProgress: false,
  prompt: '',
  generateImage: false,
} as PromptReducerState

const openAiSlice = createSlice({
  name: 'openAi',
  initialState,
  reducers: {
    // Clear all dialogs
    clearPrompt(state) {
      state.prompt = ''
    },
    setGenerateImage(state, action: PayloadAction<{value: boolean}>) {
      state.generateImage = action.payload.value
    },
    createRequest(
      state,
      _action: PayloadAction<{
        template: Template
        prompt: string
        model: string
        role: OpenAiRole
      }>,
    ) {
      state.inProgress = true
      delete state.creatingError
    },
    createComplete(state, action: PayloadAction<{template: Template; response: ChatCompletion}>) {
      const response = action.payload.response
      state.prompt = response.choices[0].message.content as string
      state.inProgress = false
    },
    createError(state, action: PayloadAction<{error: HttpError; template?: Template}>) {
      state.inProgress = false
      state.creatingError = action.payload.error
    },
  },
})

// Epics
export const generateOpenAiPromptEpic: MyEpic = (action$, state$, props: EpicClientProperties) =>
  action$.pipe(
    filter(openAiSlice.actions.createRequest.match),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const {template, prompt, model, role} = action.payload
      const generateImage: boolean = state.openAi.generateImage
      const message: OpenAiMessage = {
        role,
        prompt,
      }
      return of(action).pipe(
        mergeMap(() => {
          if (generateImage) {
            return from(
              props.openAiClient!.images.generate({
                prompt,
                // eslint-disable-next-line camelcase
                response_format: 'b64_json',
                size: '1024x1024',
                n: 1,
              }),
            )
          }
          return from(
            props.openAiClient!.chat.completions.create({
              messages: [message],
              model,
            }),
          )
        }),
        mergeMap((response: any) => {
          if ('data' in response && response.data) {
            return of(
              generateImageActions.startUploadImage({
                openAiImageUrl: response.data[0].b64_json,
              }),
            )
          }
          return of(
            openAiSlice.actions.createComplete({
              template,
              response,
            }),
          )
        }),
        catchError((error) => {
          return of(
            openAiSlice.actions.createError({
              error: {
                message: error?.message || 'Internal error',
                statusCode: error?.statusCode || 500,
              },
              template,
            }),
          )
        }),
      )
    }),
  )
export const openAiActions = openAiSlice.actions

export default openAiSlice.reducer
