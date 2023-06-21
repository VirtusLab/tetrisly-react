export type TwoPartial<T extends object> = {
    [P in keyof T]?: Partial<T[P]>;
};
