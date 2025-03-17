import { PayloadAction } from '@reduxjs/toolkit';
import { RootReducerState } from '../../modules/types';
import { MyEpic, PromptFieldBased } from '../../types';
type PromptFieldBasedReducerState = {
    items: PromptFieldBased[];
};
export declare const selectAllFieldBasedPrompts: (state: RootReducerState) => PromptFieldBased[];
export declare const clearPromptFieldBased: MyEpic;
export declare const promptFieldBasedActions: import("@reduxjs/toolkit").CaseReducerActions<{
    clear(state: import("immer").WritableDraft<PromptFieldBasedReducerState>): void;
    clearItem(state: import("immer").WritableDraft<PromptFieldBasedReducerState>, action: PayloadAction<{
        fieldName: string;
    }>): void;
    addItem(state: import("immer").WritableDraft<PromptFieldBasedReducerState>, action: PayloadAction<{
        field: PromptFieldBased;
    }>): void;
}, "promptFieldBased">;
declare const _default: import("redux").Reducer<PromptFieldBasedReducerState>;
export default _default;
