import { SanityClient } from '@sanity/client';
import React, { ReactNode } from 'react';
import { PluginConfig } from '../../index';
type Props = {
    children: ReactNode;
    client: SanityClient;
    apiKeys: PluginConfig;
};
export declare const ReduxProvider: (props: Props) => React.ReactNode;
export {};
