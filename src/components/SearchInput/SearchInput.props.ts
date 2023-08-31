import { TextInputProps } from '../TextInput';

export type SearchInputProps = Omit<
  TextInputProps,
  'beforeComponent' | 'afterComponent' | 'type'
> & {
  afterComponent?:
    | TextInputProps.InnerComponents.IconButton
    | TextInputProps.InnerComponents.Dropdown;
};
