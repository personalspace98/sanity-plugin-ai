import {GenerativeModel} from '@google/generative-ai'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {of} from 'rxjs'
import {catchError, filter, mergeMap, withLatestFrom} from 'rxjs/operators'

import {EpicClientProperties, HttpError, MyEpic, PromptReducerState, Template} from '../../types'

const initialState = {
  inProgress: false,
  prompt: '',
  generateImage: false,
  configured: false,
} as PromptReducerState

const geminiSlice = createSlice({
  name: 'gemini',
  initialState,
  reducers: {
    // Clear all dialogs
    clear(state) {
      state.prompt = ''
    },
    createRequest(
      state,
      _action: PayloadAction<{
        template: Template
        prompt: string
        model: string
        instructions: string
      }>,
    ) {
      state.inProgress = true
      delete state.creatingError
    },
    createComplete(state, action: PayloadAction<{template: Template; response: string}>) {
      state.inProgress = false
      state.prompt = action.payload.response
    },
    createError(state, action: PayloadAction<{error: HttpError; template?: Template}>) {
      state.inProgress = false
      state.creatingError = action.payload.error
    },
    setConfigured(state, action: PayloadAction<{isConfigured: boolean}>) {
      state.configured = action.payload.isConfigured
    },
    checkConfigured(_state) {
      //
    },
  },
})

// Epics
export const setIsConfiguredEpic: MyEpic = (action$, state$, props: EpicClientProperties) =>
  action$.pipe(
    filter(geminiSlice.actions.checkConfigured.match),
    withLatestFrom(state$),
    mergeMap(([_action, _state]) =>
      of(
        geminiSlice.actions.setConfigured({
          isConfigured: typeof props.geminiClient !== 'undefined',
        }),
      ),
    ),
  )

export const generateGeminiPromptEpic: MyEpic = (action$, state$, props: EpicClientProperties) =>
  action$.pipe(
    filter(geminiSlice.actions.createRequest.match),
    withLatestFrom(state$),
    mergeMap(([action, _state]) => {
      const {template, prompt, model, instructions} = action.payload
      return of(action).pipe(
        mergeMap(() =>
          of(
            props.geminiClient?.getGenerativeModel({
              systemInstruction: instructions,
              model,
            }),
          ),
        ),
        filter((genModel): genModel is GenerativeModel => !!genModel),
        mergeMap(async (result: GenerativeModel) => await result.generateContent(prompt)),
        mergeMap((result) => {
          return of(
            geminiSlice.actions.createComplete({
              template,
              response: result.response.text(),
            }),
          )
        }),
        catchError((error) => {
          return of(
            geminiSlice.actions.createError({
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

export const geminiActions = geminiSlice.actions

export default geminiSlice.reducer
