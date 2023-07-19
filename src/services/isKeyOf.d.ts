export declare const isKeyOf: <T extends object>(obj: T, key: string) => key is Exclude<keyof T, number | symbol>;
