import { PayloadAction } from '@reduxjs/toolkit';
import { ChatCompletion } from 'openai/resources/chat/';
import { HttpError, MyEpic, OpenAiRole, PromptReducerState, Template } from '../../types';
export declare const generateOpenAiPromptEpic: MyEpic;
export declare const openAiActions: import("@reduxjs/toolkit").CaseReducerActions<{
    clearPrompt(state: import("immer").WritableDraft<PromptReducerState>): void;
    setGenerateImage(state: import("immer").WritableDraft<PromptReducerState>, action: PayloadAction<{
        value: boolean;
    }>): void;
    createRequest(state: import("immer").WritableDraft<PromptReducerState>, _action: PayloadAction<{
        template: Template;
        prompt: string;
        model: string;
        role: OpenAiRole;
    }>): void;
    createComplete(state: import("immer").WritableDraft<PromptReducerState>, action: PayloadAction<{
        template: Template;
        response: ChatCompletion;
    }>): void;
    createError(state: import("immer").WritableDraft<PromptReducerState>, action: PayloadAction<{
        error: HttpError;
        template?: Template;
    }>): void;
}, "openAi">;
declare const _default: import("redux").Reducer<PromptReducerState>;
export default _default;
