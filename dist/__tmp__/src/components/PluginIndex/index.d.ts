import React from 'react';
import { Tool } from 'sanity';
import { PluginConfig } from '../../index';
type t<Options = any> = {
    tool: Tool<Options>;
};
export declare const PluginIndex: (_props: t, apiKeys: PluginConfig) => React.ReactNode;
export declare const useRootPortalElement: (className: string) => HTMLElement;
export {};
