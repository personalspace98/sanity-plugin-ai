import { PayloadAction } from '@reduxjs/toolkit';
import { MyEpic, PromptPlaceholders } from '../../types';
import { RootReducerState } from '../types';
type PromptPlaceHolderReducerState = {
    placeholders: PromptPlaceholder[];
    deletedPlaceholders: string[];
};
export declare const selectAllPlaceholdersPrompts: (state: RootReducerState) => PromptPlaceholders[];
export declare const selectAllDeletedPrompts: (state: RootReducerState) => string[];
export declare const clearPromptPlaceholders: MyEpic;
export declare const promptPlaceHolderActions: import("@reduxjs/toolkit").CaseReducerActions<{
    clearDeleteItem(state: import("immer").WritableDraft<PromptPlaceHolderReducerState>, action: PayloadAction<{
        name: string;
    }>): void;
    clear(state: import("immer").WritableDraft<PromptPlaceHolderReducerState>): void;
    deleteItem(state: import("immer").WritableDraft<PromptPlaceHolderReducerState>, action: PayloadAction<{
        name: string;
    }>): void;
    addItem(state: import("immer").WritableDraft<PromptPlaceHolderReducerState>, action: PayloadAction<{
        placeholder: PromptPlaceholders;
    }>): void;
}, "promptPlaceHolder">;
declare const _default: import("redux").Reducer<PromptPlaceHolderReducerState>;
export default _default;
