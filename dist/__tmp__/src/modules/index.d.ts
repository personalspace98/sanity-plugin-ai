import { ActionFromReducersMapObject, StateFromReducersMapObject } from '@reduxjs/toolkit';
import { Reducer } from 'react';
export declare const rootEpic: import("redux-observable").Epic<import("redux").UnknownAction, import("redux").UnknownAction, {
    gemini: import("../types").PromptReducerState;
    openAi: import("../types").PromptReducerState;
    templates: {
        allIds: string[];
        allTemplates: import("../types").Template[];
        filteredTemplates: import("../types").Template[];
        byIds: Record<string, import("../types").Template>;
        inProgress: boolean;
        creatingError?: import("../types").HttpError;
        fetchCount: number;
        fetching: boolean;
        fetchingError?: import("../types").HttpError;
        panelVisible: boolean;
        pageSize: number;
        pageIndex: number;
        order: import("../types").Order;
    };
    dialog: {
        items: import("../types").Dialog[];
    };
    notifications: {
        items: {
            template?: import("../types").Template;
            status: "error" | "warning" | "success" | "info";
            title: string;
        }[];
    };
    promptPlaceholders: {
        placeholders: import("../types").PromptPlaceholders[];
        deletedPlaceholders: string[];
    };
    generatedImage: {
        imageUrl: string;
        inProgress: boolean;
        error: import("../types").HttpError;
    };
    promptFieldBased: {
        items: import("../types").PromptFieldBased[];
    };
}, {
    client: import("sanity").SanityClient;
    geminiClient?: import("@google/generative-ai").GoogleGenerativeAI;
    openAiClient?: import("openai").OpenAI;
}>;
export declare const rootReducers: {
    gemini: import("redux").Reducer<import("../types").PromptReducerState>;
    openAi: import("redux").Reducer<import("../types").PromptReducerState>;
    templates: import("redux").Reducer<{
        allIds: string[];
        allTemplates: import("../types").Template[];
        filteredTemplates: import("../types").Template[];
        byIds: Record<string, import("../types").Template>;
        inProgress: boolean;
        creatingError?: import("../types").HttpError;
        fetchCount: number;
        fetching: boolean;
        fetchingError?: import("../types").HttpError;
        panelVisible: boolean;
        pageSize: number;
        pageIndex: number;
        order: import("../types").Order;
    }>;
    dialog: import("redux").Reducer<{
        items: import("../types").Dialog[];
    }>;
    notifications: import("redux").Reducer<{
        items: {
            template?: import("../types").Template;
            status: "error" | "warning" | "success" | "info";
            title: string;
        }[];
    }>;
    promptPlaceholders: import("redux").Reducer<{
        placeholders: import("../types").PromptPlaceholders[];
        deletedPlaceholders: string[];
    }>;
    generatedImage: import("redux").Reducer<{
        imageUrl: string;
        inProgress: boolean;
        error: import("../types").HttpError;
    }>;
    promptFieldBased: import("redux").Reducer<{
        items: import("../types").PromptFieldBased[];
    }>;
};
type ReducersMapObject = typeof rootReducers;
export declare const rootReducer: Reducer<StateFromReducersMapObject<ReducersMapObject>, ActionFromReducersMapObject<ReducersMapObject>>;
export {};
