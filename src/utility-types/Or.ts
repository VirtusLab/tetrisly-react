type Not<T> = {
  [P in keyof T]?: never;
};

export type Or<T, U> = (T & Not<U>) | (U & Not<T>);
