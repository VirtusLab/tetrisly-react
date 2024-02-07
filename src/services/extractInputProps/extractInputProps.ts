import { InputHTMLAttributes } from 'react';

const inputPropsKeys = [
  'accept',
  'alt',
  'autoComplete',
  'capture',
  'enterKeyHint',
  'form',
  'formAction',
  'formEncType',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'list',
  'max',
  'maxLength',
  'min',
  'minLength',
  'multiple',
  'name',
  'pattern',
  'placeholder',
  'readOnly',
  'required',
  'src',
  'step',
  'value',
  'id',
  'defaultValue',
  'onClick',
  'onChange',
  'onKeyDown',
  'onKeyUp',
  'onFocus',
  'onBlur',
] as const;

type InputPropsKeys = (typeof inputPropsKeys)[number];

type InputProps = Pick<InputHTMLAttributes<HTMLInputElement>, InputPropsKeys>;

type RestProps<T> = Omit<T, InputPropsKeys>;

export const extractInputProps = <T extends object = object>(
  props: T,
): [InputProps, RestProps<T>] => {
  const entries = Object.entries(props);
  const [inputProps, restProps] = entries.reduce(
    ([inputs, rest], [key, value]) => {
      if (inputPropsKeys.some((inputKey) => inputKey === key)) {
        return [{ ...inputs, [key]: value }, rest];
      }
      return [inputs, { ...rest, [key]: value }];
    },
    [{} as InputProps, {} as RestProps<T>],
  );
  return [inputProps, restProps];
};
