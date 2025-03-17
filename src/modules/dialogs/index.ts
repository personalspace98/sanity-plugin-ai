import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ofType} from 'redux-observable'
import {of} from 'rxjs'
import {mergeMap, withLatestFrom} from 'rxjs/operators'

import {Dialog, DialogTemplateProperties, MyEpic, Template} from '../../types'
import {geminiActions} from '../gemini'
import {templateActions} from '../templates'

type DialogReducerState = {
  items: Dialog[]
}

const initialState = {
  items: [],
} as DialogReducerState

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    clear(state) {
      state.items = []
    },
    clearItem(state, action: PayloadAction<{id: string}>) {
      const id = action.payload?.id
      state.items = state.items.filter((item) => item.id !== id)
    },
    showTemplateDialog(state, action: PayloadAction<{template?: Template | null}>) {
      const {template} = action.payload
      const item = {
        id: 'modifyTemplateDialog',
        type: 'modifyTemplateDialog',
        template,
      }

      if (!template) {
        delete item.template
      }
      state.items.push(item as DialogTemplateProperties)
    },
    showsConfirmDeleteTemplateDialog(state, action: PayloadAction<{template: Template}>) {
      state.items.push({
        id: 'confirmDeleteTemplateDialog',
        type: 'confirmDeleteTemplateDialog',
        template: action.payload.template,
      })
    },
    showTemplatesDialog(state) {
      state.items.push({
        id: 'dialogTemplates',
        type: 'dialogTemplates',
      })
    },
    showCreatePromptDialog(state, action: PayloadAction<{template: Template}>) {
      state.items.push({
        id: 'dialogCreatePromptProperties',
        type: 'dialogCreatePromptProperties',
        template: action.payload.template,
      })
    },
  },
})

// Epics
export const clearCreatePromptDialog: MyEpic = (action$, state$) =>
  action$.pipe(
    ofType(geminiActions.createComplete.type),
    withLatestFrom(state$),
    mergeMap(([_action, _state]) => {
      return of(
        dialogSlice.actions.clearItem({id: 'dialogCreatePromptProperties'}),
        dialogSlice.actions.clearItem({id: 'dialogTemplates'}),
      )
    }),
  )

export const clearModifyDialog: MyEpic = (action$, state$) =>
  action$.pipe(
    ofType(templateActions.createComplete.type, templateActions.updateComplete.type),
    withLatestFrom(state$),
    mergeMap(([_action, _state]) => {
      return of(dialogActions.clear())
    }),
  )

export const dialogActions = dialogSlice.actions

export default dialogSlice.reducer
