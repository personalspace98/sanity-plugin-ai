import { PayloadAction } from '@reduxjs/toolkit';
import { MyEpic, Template } from '../../types';
type Notification = {
    template?: Template;
    status: 'error' | 'warning' | 'success' | 'info';
    title: string;
};
type NotificationsReducerState = {
    items: Notification[];
};
export declare const notificationsGenericErrorEpic: MyEpic;
export declare const notificationsTemplateCreateCompleteEpic: MyEpic;
export declare const notificationTemplateUpdateEpic: MyEpic;
export declare const notificationTemplateDeleteEpic: MyEpic;
export declare const notificationTextGenerationCreateCompleteEpic: MyEpic;
export declare const notificationsActions: import("@reduxjs/toolkit").CaseReducerActions<{
    addTemplateNotification(state: import("immer").WritableDraft<NotificationsReducerState>, action: PayloadAction<Notification>): void;
    addAiNotification(state: import("immer").WritableDraft<NotificationsReducerState>, action: PayloadAction<Notification>): void;
}, "notifications">;
declare const _default: import("redux").Reducer<NotificationsReducerState>;
export default _default;
