import { PayloadAction } from '@reduxjs/toolkit';
import { Dialog, MyEpic, Template } from '../../types';
type DialogReducerState = {
    items: Dialog[];
};
export declare const clearCreatePromptDialog: MyEpic;
export declare const clearModifyDialog: MyEpic;
export declare const dialogActions: import("@reduxjs/toolkit").CaseReducerActions<{
    clear(state: import("immer").WritableDraft<DialogReducerState>): void;
    clearItem(state: import("immer").WritableDraft<DialogReducerState>, action: PayloadAction<{
        id: string;
    }>): void;
    showTemplateDialog(state: import("immer").WritableDraft<DialogReducerState>, action: PayloadAction<{
        template?: Template | null;
    }>): void;
    showsConfirmDeleteTemplateDialog(state: import("immer").WritableDraft<DialogReducerState>, action: PayloadAction<{
        template: Template;
    }>): void;
    showTemplatesDialog(state: import("immer").WritableDraft<DialogReducerState>): void;
    showCreatePromptDialog(state: import("immer").WritableDraft<DialogReducerState>, action: PayloadAction<{
        template: Template;
    }>): void;
}, "dialog">;
declare const _default: import("redux").Reducer<DialogReducerState>;
export default _default;
