import { PayloadAction } from '@reduxjs/toolkit';
import { HttpError, MyEpic, Template } from '../../types';
type GeminiReducerState = {
    inProgress: boolean;
    store: false;
    prompt: string;
    creatingError?: HttpError;
};
export declare const generatePromptEpic: MyEpic;
export declare const geminiActions: import("@reduxjs/toolkit").CaseReducerActions<{
    clear(state: import("immer").WritableDraft<GeminiReducerState>): void;
    createRequest(state: import("immer").WritableDraft<GeminiReducerState>, _action: PayloadAction<{
        template: Template;
        content: string;
        model: string;
        instructions: string;
    }>): void;
    createComplete(state: import("immer").WritableDraft<GeminiReducerState>, action: PayloadAction<{
        template: Template;
        response: string;
    }>): void;
    createError(state: import("immer").WritableDraft<GeminiReducerState>, action: PayloadAction<{
        error: HttpError;
        template?: Template;
    }>): void;
}, "gemini">;
declare const _default: import("redux").Reducer<GeminiReducerState>;
export default _default;
