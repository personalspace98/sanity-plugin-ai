import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {from, of} from 'rxjs'
import {catchError, filter, mergeMap, withLatestFrom} from 'rxjs/operators'

import {HttpError, MyEpic} from '../../types'

type GenerateImageState = {
  imageUrl: string
  inProgress: boolean
  error: HttpError
}

type AssetUploadResponse = {
  body: {
    document: {
      _id: string
    }
  }
}

const initialState = {
  imageUrl: '',
  inProgress: false,
} as GenerateImageState

const generateImageSlice = createSlice({
  name: 'generateImage',
  initialState,
  reducers: {
    // Clear all items
    clear(state) {
      state.imageUrl = ''
    },
    // Set image url
    setImageUrl(state, action: PayloadAction<{url: string}>) {
      state.imageUrl = action.payload.url
      state.inProgress = false
    },
    startUploadImage(state, action: PayloadAction<{openAiImageUrl: string}>) {
      state.inProgress = true
    },
    createError(state, action: PayloadAction<{error: HttpError}>) {
      const {error} = action.payload
      state.inProgress = false
      state.error = {
        message: error.message,
        statusCode: error.statusCode,
      }
    },
  },
})

// Epics
export const uploadImage: MyEpic = (action$, state$, {client}) =>
  action$.pipe(
    filter(generateImageActions.startUploadImage.match),
    withLatestFrom(state$),
    mergeMap(([action, _state]) =>
      from(fetch(`data:image/png;base64,${action.payload.openAiImageUrl}`)).pipe(
        mergeMap((response) => response.blob()),
      ),
    ),
    mergeMap((blob: Blob) => from(client.observable.assets.upload('image', blob))),
    filter((result) => result.type === 'response'),
    mergeMap((result: AssetUploadResponse) => {
      return of(generateImageActions.setImageUrl({url: result?.body?.document?._id}))
    }),
    catchError((error) => {
      console.error(error)
      return of(
        generateImageActions.createError({
          error: {
            message: error?.message || 'Internal error',
            statusCode: error?.statusCode || 500,
          },
        }),
      )
    }),
  )

export const generateImageActions = generateImageSlice.actions

export default generateImageSlice.reducer
