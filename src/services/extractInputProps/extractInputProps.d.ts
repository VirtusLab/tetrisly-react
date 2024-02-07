import { InputHTMLAttributes } from 'react';
declare const inputPropsKeys: readonly ["accept", "alt", "autoComplete", "capture", "enterKeyHint", "form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "list", "max", "maxLength", "min", "minLength", "multiple", "name", "pattern", "placeholder", "readOnly", "required", "src", "step", "value", "id", "defaultValue", "onClick", "onChange", "onKeyDown", "onKeyUp", "onFocus", "onBlur"];
type InputPropsKeys = (typeof inputPropsKeys)[number];
type InputProps = Pick<InputHTMLAttributes<HTMLInputElement>, InputPropsKeys>;
type RestProps<T> = Omit<T, InputPropsKeys>;
export declare const extractInputProps: <T extends object = object>(props: T) => [InputProps, RestProps<T>];
export {};
