type Params<T, K> = {
    defaultConfig: T;
    custom: K;
};
export declare const mergeConfigWithCustom: <T, K>({ defaultConfig, custom, }: Params<T, K>) => T;
export {};
