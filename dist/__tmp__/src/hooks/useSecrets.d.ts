import { AiModelConfig, SecretsKey } from '../types';
export declare const useGetSecrets: () => SecretsKey;
export declare const useGetModelConfig: (getGeminiConfig: boolean) => AiModelConfig | object;
