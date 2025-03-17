import { PayloadAction } from '@reduxjs/toolkit';
import { HttpError, MyEpic, PromptReducerState, Template } from '../../types';
export declare const setIsConfiguredEpic: MyEpic;
export declare const generateGeminiPromptEpic: MyEpic;
export declare const geminiActions: import("@reduxjs/toolkit").CaseReducerActions<{
    clear(state: import("immer").WritableDraft<PromptReducerState>): void;
    createRequest(state: import("immer").WritableDraft<PromptReducerState>, _action: PayloadAction<{
        template: Template;
        prompt: string;
        model: string;
        instructions: string;
    }>): void;
    createComplete(state: import("immer").WritableDraft<PromptReducerState>, action: PayloadAction<{
        template: Template;
        response: string;
    }>): void;
    createError(state: import("immer").WritableDraft<PromptReducerState>, action: PayloadAction<{
        error: HttpError;
        template?: Template;
    }>): void;
    setConfigured(state: import("immer").WritableDraft<PromptReducerState>, action: PayloadAction<{
        isConfigured: boolean;
    }>): void;
    checkConfigured(_state: import("immer").WritableDraft<PromptReducerState>): void;
}, "gemini">;
declare const _default: import("redux").Reducer<PromptReducerState>;
export default _default;
