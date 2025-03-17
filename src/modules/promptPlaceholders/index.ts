import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ofType} from 'redux-observable'
import {of} from 'rxjs'
import {mergeMap, withLatestFrom} from 'rxjs/operators'

import {templateActions} from '../../modules/templates'
import {MyEpic, PromptPlaceholder} from '../../types'
import {RootReducerState} from '../types'

type PromptPlaceHolderReducerState = {
  placeholders: PromptPlaceholder[]
  deletedPlaceholders: string[]
}

const initialState = {
  placeholders: [],
  deletedPlaceholders: [],
} as PromptPlaceHolderReducerState

const promptPlaceholderSlice = createSlice({
  name: 'promptPlaceHolder',
  initialState,
  reducers: {
    // add user input item
    addItem(state, action: PayloadAction<{placeholder: PromptPlaceholder}>) {
      state.placeholders.push(action.payload.placeholder)
    },
    // Clear all items
    clear(state) {
      state.placeholders = []
    },
    // Clear specific item
    deleteItem(state, action: PayloadAction<{name: string}>) {
      const name = action.payload.name
      // state.deletedPlaceholders.push(name)
      state.placeholders = state.placeholders.filter((item) => {
        if (item.name === name) {
          item.deleted = true
        }
        return true
      })
    },
  },
})

export const selectAllPlaceholdersPrompts = (state: RootReducerState): PromptPlaceholder[] =>
  state.promptPlaceholders.placeholders

export const selectAllDeletedPrompts = (state: RootReducerState): string[] =>
  state.promptPlaceholders.deletedPlaceholders

// Epics
export const clearPromptPlaceholders: MyEpic = (action$, state$) =>
  action$.pipe(
    ofType(templateActions.createComplete.type, templateActions.updateComplete.type),
    withLatestFrom(state$),
    mergeMap(([_action, _state]) => {
      return of(promptPlaceholderSlice.actions.clear())
    }),
  )

export const promptPlaceHolderActions = promptPlaceholderSlice.actions

export default promptPlaceholderSlice.reducer
