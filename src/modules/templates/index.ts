import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type {ClientError} from '@sanity/client'
import groq from 'groq'
import {ofType} from 'redux-observable'
import {of} from 'rxjs'
import {catchError, filter, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators'

import {getOrderTitle} from '../../config/orders'
import {RootReducerState} from '../../modules/types'
import checkTemplateName from '../../operators/checkTemplateName'
import {HttpError, MyEpic, Order, OrderDirection, PromptPlaceholders, Template} from '../../types'
import {ORDER_OPTIONS} from '../../utils/constants'
import constructFilter from '../../utils/constructFilter'

type TemplateFetchPayload = {
  payload: {
    pageIndex: number
    isFilter?: boolean
  }
}

type TemplateFetchState = {
  templates: TemplateReducerState
}

type TemplateReducerState = {
  allIds: string[]
  allTemplates: Template[]
  filteredTemplates: Template[]
  byIds: Record<string, Template>
  inProgress: boolean
  creatingError?: HttpError
  fetchCount: number
  fetching: boolean
  fetchingError?: HttpError
  panelVisible: boolean
  pageSize: number
  pageIndex: number
  order: Order
}

const defaultOrder = ORDER_OPTIONS[0] as {
  direction: OrderDirection
  field: string
}

const initialState: TemplateReducerState = {
  filteredTemplates: [],
  allTemplates: [],
  allIds: [],
  byIds: {},
  inProgress: false,
  creatingError: undefined,
  fetchCount: -1,
  fetching: false,
  fetchingError: undefined,
  panelVisible: true,
  pageIndex: 0,
  pageSize: 2,
  order: {
    direction: defaultOrder.direction,
    field: defaultOrder.field,
    title: getOrderTitle(defaultOrder.field, defaultOrder.direction),
  },
}

const templateSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    createRequest(state, _action: PayloadAction<{template: Template}>) {
      state.inProgress = true
      delete state.creatingError
    },
    createComplete(state, action: PayloadAction<{id: string; template: Template}>) {
      const {id, template} = action.payload
      state.inProgress = false
      if (!state.allTemplates.find((t) => t._id === id)) {
        template._id = id
        state.allTemplates.push(template)
      }
    },
    updateRequest(state, _action: PayloadAction<{template: Template}>) {
      state.inProgress = true
      delete state.creatingError
    },
    updateComplete(state, action: PayloadAction<{id: string; template: Template}>) {
      const {id, template} = action.payload
      const templateIndex = state.allTemplates.findIndex((t) => t._id === id)
      state.allTemplates[templateIndex] = template

      state.inProgress = false
    },
    createDelete(state, _action: PayloadAction<{template: Template}>) {
      state.inProgress = true
      delete state.creatingError
    },
    deleteComplete(state, action: PayloadAction<{id: string; pageIndex: number}>) {
      state.inProgress = false
      const templateIndex = state.allTemplates.findIndex((t) => t._id === action.payload.id)
      state.allTemplates.splice(templateIndex, 1)
    },
    createError(state, action: PayloadAction<{error: HttpError; template?: Template}>) {
      state.inProgress = false
      state.creatingError = action.payload.error
    },
    loadPageIndex(state, action: PayloadAction<{pageIndex: number; isFilter?: boolean}>) {
      state.pageIndex = action.payload.pageIndex
    },
    loadNextPage() {
      //
    },
    setSelectedValue(state, action: PayloadAction<{template: Template; value: boolean}>) {
      const {template, value} = action.payload
      const templateToUpdate = state.allTemplates.find((t) => t._id === template._id)
      if (templateToUpdate) {
        templateToUpdate.selected = value
      }
    },
    filterItems(state, _action: PayloadAction<{filter: string}>) {
      state.inProgress = true
      delete state.creatingError
    },
    fetchComplete(state, action: PayloadAction<{templates: Template[]; isFilter?: boolean}>) {
      const {isFilter, templates} = action.payload
      if (isFilter) {
        state.allTemplates = []
      }
      if (templates) {
        templates.forEach((template: Template) => {
          if (!state.allTemplates.find((t) => t._id === template._id)) {
            state.allTemplates.push(template)
          }
        })
      }

      state.fetching = false
      state.inProgress = false
      state.fetchCount = templates.length || 0
      delete state.fetchingError
    },
    fetchRequest: {
      reducer: (state, _action: PayloadAction<{query: string; isFilter?: boolean}>) => {
        state.fetching = true
        delete state.fetchingError
      },
      prepare: ({
        queryFilter,
        selector = ``,
        sort = groq`order(_updatedAt desc)`,
        isFilter = false,
      }: {
        queryFilter: string
        replace?: boolean
        selector?: string
        sort?: string
        isFilter?: boolean
      }) => {
        const pipe = sort || selector ? '|' : ''

        // Construct query
        const query = groq`
          *[${queryFilter}] {
                _id,
                _createdAt,
                _updatedAt,
                prompt,
                title,
                promptPlaceholders,
                promptFieldBased
           } ${pipe} ${sort} ${selector}
        `
        return {payload: {query, isFilter}}
      },
    },
  },
})

export const templateUpdateEpic: MyEpic = (action$, state$, {client}) =>
  action$.pipe(
    filter(templateSlice.actions.updateRequest.match),
    withLatestFrom(state$),
    mergeMap(([action, _state]) => {
      const {template} = action.payload
      return of(action).pipe(
        mergeMap(() =>
          client.observable
            .patch(template._id as string)
            .set({...template})
            .commit(),
        ),
        mergeMap((result) => {
          return of(templateSlice.actions.updateComplete({id: result._id, template}))
        }),
        catchError((error: ClientError) => {
          return of(
            templateSlice.actions.createError({
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

export const templateCreateEpic: MyEpic = (action$, state$, {client}) =>
  action$.pipe(
    filter(templateSlice.actions.createRequest.match),
    withLatestFrom(state$),
    mergeMap(([action, _state]) => {
      const {template} = action.payload
      return of(action).pipe(
        checkTemplateName(client, template.title),
        mergeMap(() =>
          client.observable.create({
            _type: 'template',
            ...template,
          }),
        ),
        mergeMap((result) => {
          return of(templateSlice.actions.createComplete({id: result._id, template}))
        }),
        catchError((error: ClientError) => {
          return of(
            templateSlice.actions.createError({
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

export const templateDeleteEpic: MyEpic = (action$, state$, {client}) =>
  action$.pipe(
    filter(templateSlice.actions.createDelete.match),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      const {template} = action.payload
      return of(action).pipe(
        mergeMap(() => client.observable.delete(template._id as string)),
        mergeMap((_result) => {
          return of(
            templateSlice.actions.deleteComplete({
              id: template._id as string,
              pageIndex: state.templates.pageIndex,
            }),
          )
        }),
        catchError((error: ClientError) => {
          return of(
            templateSlice.actions.createError({
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

export const templatesFetchPageIndexEpic: MyEpic = (action$, state$) =>
  action$.pipe(
    ofType(templateActions.loadPageIndex.type, templateActions.deleteComplete.type),
    withLatestFrom(state$),
    switchMap(([action, state]: [TemplateFetchPayload, TemplateFetchState]) => {
      const isFilter = action.payload.isFilter
      const pageSize = state.templates.pageSize
      const start = action.payload.pageIndex * pageSize
      const end = start + pageSize
      const constructedFilter = constructFilter({
        type: 'template',
      })

      return of(
        templateActions.fetchRequest({
          isFilter,
          queryFilter: constructedFilter,
          selector: groq`[${start}...${end}]`,
          sort: groq`order(${state.templates.order.direction})`,
        }),
      )
    }),
  )

export const templatesFetchEpic: MyEpic = (action$, state$, {client}) =>
  action$.pipe(
    filter(templateActions.fetchRequest.match),
    withLatestFrom(state$),
    switchMap(([action, _state]) => {
      const query = action.payload?.query
      const isFilter = action.payload?.isFilter ?? false
      return of(action).pipe(
        mergeMap(() => client.observable.fetch(query)),
        mergeMap((result) => {
          return of(templateActions.fetchComplete({templates: result, isFilter}))
        }),
        catchError((error: ClientError) =>
          of(
            templateActions.createError({
              error: {
                message: error?.message || 'Internal error',
                statusCode: error?.statusCode || 500,
              },
            }),
          ),
        ),
      )
    }),
  )

export const templateFetchNextPageEpic: MyEpic = (action$, state$) =>
  action$.pipe(
    filter(templateActions.loadNextPage.match),
    withLatestFrom(state$),
    switchMap(([_action, state]) =>
      of(templateActions.loadPageIndex({pageIndex: state.templates.pageIndex + 1})),
    ),
  )

export const filterTemplatesEpic: MyEpic = (action$, state$) =>
  action$.pipe(
    filter(templateActions.filterItems.match),
    withLatestFrom(state$),
    switchMap(([action, state]) => {
      const filterValue = action.payload.filter
      const constructedFilter = constructFilter({
        type: 'template',
        filterValue,
      })

      return of(
        templateActions.fetchRequest({
          queryFilter: constructedFilter,
          sort: groq`order(${state.templates.order.direction})`,
          isFilter: true,
        }),
      )
    }),
  )

export const selectAllTemplates = (state: RootReducerState) => state.templates.allTemplates
export const selectSelectedTemplate = (state: RootReducerState) =>
  state.templates.allTemplates.find((t) => t.selected)

export default templateSlice.reducer
export const templateActions = templateSlice.actions
