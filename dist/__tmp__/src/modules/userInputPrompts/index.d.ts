import { PayloadAction } from '@reduxjs/toolkit';
import { MyEpic, PromptPlaceholders } from '../../types';
import { RootReducerState } from '../types';
type DialogReducerState = {
    items: PromptPlaceholders[];
};
export declare const selectAllPlaceholdersPrompts: (state: RootReducerState) => DialogReducerState;
export declare const clearPromptPlaceholders: MyEpic;
export declare const promptPlaceHolderActions: import("@reduxjs/toolkit").CaseReducerActions<{
    clear(state: import("immer").WritableDraft<DialogReducerState>): void;
    clearItem(state: import("immer").WritableDraft<DialogReducerState>, action: PayloadAction<{
        name: string;
    }>): void;
    addItem(state: import("immer").WritableDraft<DialogReducerState>, action: PayloadAction<{
        userInput: PromptPlaceholders;
    }>): void;
}, "dialog">;
declare const _default: import("redux").Reducer<DialogReducerState>;
export default _default;
