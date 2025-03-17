import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ofType} from 'redux-observable'
import {of} from 'rxjs'
import {filter, mergeMap} from 'rxjs/operators'

import {openAiActions} from '../../modules/openai'
import {MyEpic, Template} from '../../types'
import {geminiActions} from '../gemini'
import {templateActions} from '../templates'

type Notification = {
  template?: Template
  status: 'error' | 'warning' | 'success' | 'info'
  title: string
}

type NotificationsReducerState = {
  items: Notification[]
}

const initialState = {
  items: [],
} as NotificationsReducerState

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addTemplateNotification(state, action: PayloadAction<Notification>) {
      const {template, status, title} = action.payload
      state.items.push({
        template,
        status,
        title,
      })
    },
    addAiNotification(state, action: PayloadAction<Notification>) {
      const {status, title} = action.payload
      state.items.push({
        status,
        title,
      })
    },
  },
})

// Epics
export const notificationsGenericErrorEpic: MyEpic = (action$) =>
  action$.pipe(
    ofType(templateActions.createError.type),
    mergeMap((action: AnyAction) => {
      const error = action.payload?.error
      console.error(error)
      return of(
        notificationsSlice.actions.addTemplateNotification({
          status: 'error',
          title: `An error occurred: ${error.message}`,
        }),
      )
    }),
  )

export const notificationsTemplateCreateCompleteEpic: MyEpic = (action$) =>
  action$.pipe(
    filter(templateActions.createComplete.match),
    mergeMap(() =>
      of(
        notificationsSlice.actions.addTemplateNotification({
          status: 'success',
          title: `Template created`,
        }),
      ),
    ),
  )

export const notificationTemplateUpdateEpic: MyEpic = (action$) =>
  action$.pipe(
    filter(templateActions.updateComplete.match),
    mergeMap(() =>
      of(
        notificationsSlice.actions.addTemplateNotification({
          status: 'success',
          title: `Template updated`,
        }),
      ),
    ),
  )

export const notificationTemplateDeleteEpic: MyEpic = (action$) =>
  action$.pipe(
    filter(templateActions.deleteComplete.match),
    mergeMap(() =>
      of(
        notificationsSlice.actions.addTemplateNotification({
          status: 'error',
          title: `Template deleted`,
        }),
      ),
    ),
  )

export const notificationTextGenerationCreateCompleteEpic: MyEpic = (action$) =>
  action$.pipe(
    ofType(geminiActions.createComplete.type, openAiActions.createComplete.type),
    mergeMap(() => {
      return of(
        notificationsSlice.actions.addAiNotification({
          status: 'success',
          title: `Text generation succeeds`,
        }),
      )
    }),
  )

export const notificationsActions = notificationsSlice.actions

export default notificationsSlice.reducer
