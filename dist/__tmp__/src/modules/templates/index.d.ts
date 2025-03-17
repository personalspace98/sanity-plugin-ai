import { PayloadAction } from '@reduxjs/toolkit';
import { RootReducerState } from '../../modules/types';
import { HttpError, MyEpic, Order, Template } from '../../types';
type TemplateReducerState = {
    allIds: string[];
    allTemplates: Template[];
    filteredTemplates: Template[];
    byIds: Record<string, Template>;
    inProgress: boolean;
    creatingError?: HttpError;
    fetchCount: number;
    fetching: boolean;
    fetchingError?: HttpError;
    panelVisible: boolean;
    pageSize: number;
    pageIndex: number;
    order: Order;
};
export declare const templateUpdateEpic: MyEpic;
export declare const templateCreateEpic: MyEpic;
export declare const templateDeleteEpic: MyEpic;
export declare const templatesFetchPageIndexEpic: MyEpic;
export declare const templatesFetchEpic: MyEpic;
export declare const templateFetchNextPageEpic: MyEpic;
export declare const filterTemplatesEpic: MyEpic;
export declare const selectAllTemplates: (state: RootReducerState) => Template[];
export declare const selectSelectedTemplate: (state: RootReducerState) => Template | undefined;
declare const _default: import("redux").Reducer<TemplateReducerState>;
export default _default;
export declare const templateActions: import("@reduxjs/toolkit").CaseReducerActions<{
    createRequest(state: import("immer").WritableDraft<TemplateReducerState>, _action: PayloadAction<{
        template: Template;
    }>): void;
    createComplete(state: import("immer").WritableDraft<TemplateReducerState>, action: PayloadAction<{
        id: string;
        template: Template;
    }>): void;
    updateRequest(state: import("immer").WritableDraft<TemplateReducerState>, _action: PayloadAction<{
        template: Template;
    }>): void;
    updateComplete(state: import("immer").WritableDraft<TemplateReducerState>, action: PayloadAction<{
        id: string;
        template: Template;
    }>): void;
    createDelete(state: import("immer").WritableDraft<TemplateReducerState>, _action: PayloadAction<{
        template: Template;
    }>): void;
    deleteComplete(state: import("immer").WritableDraft<TemplateReducerState>, action: PayloadAction<{
        id: string;
        pageIndex: number;
    }>): void;
    createError(state: import("immer").WritableDraft<TemplateReducerState>, action: PayloadAction<{
        error: HttpError;
        template?: Template;
    }>): void;
    loadPageIndex(state: import("immer").WritableDraft<TemplateReducerState>, action: PayloadAction<{
        pageIndex: number;
        isFilter?: boolean;
    }>): void;
    loadNextPage(): void;
    setSelectedValue(state: import("immer").WritableDraft<TemplateReducerState>, action: PayloadAction<{
        template: Template;
        value: boolean;
    }>): void;
    filterItems(state: import("immer").WritableDraft<TemplateReducerState>, _action: PayloadAction<{
        filter: string;
    }>): void;
    fetchComplete(state: import("immer").WritableDraft<TemplateReducerState>, action: PayloadAction<{
        templates: Template[];
        isFilter?: boolean;
    }>): void;
    fetchRequest: {
        reducer: (state: import("immer").WritableDraft<TemplateReducerState>, _action: PayloadAction<{
            query: string;
            isFilter?: boolean;
        }>) => void;
        prepare: ({ queryFilter, selector, sort, isFilter, }: {
            queryFilter: string;
            replace?: boolean;
            selector?: string;
            sort?: string;
            isFilter?: boolean;
        }) => {
            payload: {
                query: string;
                isFilter: boolean;
            };
        };
    };
}, "templates">;
