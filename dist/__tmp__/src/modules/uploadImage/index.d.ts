import { PayloadAction } from '@reduxjs/toolkit';
import { HttpError, MyEpic } from '../../types';
type GenerateImageState = {
    imageUrl: string;
    inProgress: boolean;
    error: HttpError;
};
export declare const uploadImage: MyEpic;
export declare const generateImageActions: import("@reduxjs/toolkit").CaseReducerActions<{
    clear(state: import("immer").WritableDraft<GenerateImageState>): void;
    setImageUrl(state: import("immer").WritableDraft<GenerateImageState>, action: PayloadAction<{
        url: string;
    }>): void;
    startUploadImage(state: import("immer").WritableDraft<GenerateImageState>, action: PayloadAction<{
        openAiImageUrl: string;
    }>): void;
    createError(state: import("immer").WritableDraft<GenerateImageState>, action: PayloadAction<{
        error: HttpError;
    }>): void;
}, "generateImage">;
declare const _default: import("redux").Reducer<GenerateImageState>;
export default _default;
