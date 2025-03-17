import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ofType} from 'redux-observable'
import {of} from 'rxjs'
import {mergeMap, withLatestFrom} from 'rxjs/operators'

import {templateActions} from '../../modules/templates'
import {RootReducerState} from '../../modules/types'
import {MyEpic, PromptFieldBased} from '../../types'

type PromptFieldBasedReducerState = {
  items: PromptFieldBased[]
}

const initialState = {
  items: [],
} as PromptFieldBasedReducerState

const promptFieldBasedSlice = createSlice({
  name: 'promptFieldBased',
  initialState,
  reducers: {
    // Clear all items
    clear(state) {
      state.items = []
    },
    // Clear specific item
    clearItem(state, action: PayloadAction<{fieldName: string}>) {
      const name = action.payload?.fieldName
      state.items = state.items.filter((item) => item.fieldName !== name)
    },
    // add user input item
    addItem(state, action: PayloadAction<{field: PromptFieldBased}>) {
      state.items.push(action.payload.field)
    },
  },
})

export const selectAllFieldBasedPrompts = (state: RootReducerState): PromptFieldBased[] =>
  state.promptFieldBased.items

// Epics
export const clearPromptFieldBased: MyEpic = (action$, state$) =>
  action$.pipe(
    ofType(templateActions.createComplete.type, templateActions.updateComplete.type),
    withLatestFrom(state$),
    mergeMap(([_action, _state]) => {
      return of(promptFieldBasedSlice.actions.clear())
    }),
  )

export const promptFieldBasedActions = promptFieldBasedSlice.actions

export default promptFieldBasedSlice.reducer
