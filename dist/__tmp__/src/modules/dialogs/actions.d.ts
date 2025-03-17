export declare const DIALOG_ACTIONS: {
    showUserInput: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"dialog/showUserInput">;
    showTemplateCreate: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"dialog/showTemplateCreate">;
    showTemplateEdit: import("@reduxjs/toolkit").ActionCreatorWithPreparedPayload<[{
        templateId: string;
    }], {
        templateId: string;
    }, "dialog/showTemplateEdit", never, never>;
};
