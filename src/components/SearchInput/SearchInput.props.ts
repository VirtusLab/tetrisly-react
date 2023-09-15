import { TextInputProps } from '../TextInput';

export type SearchInputProps = Omit<
  TextInputProps,
  'beforeComponent' | 'afterComponent' | 'type' | 'state'
> & {
  state?: 'disabled';
  afterComponent?:
    | TextInputProps.InnerComponents.IconButton
    | TextInputProps.InnerComponents.Dropdown;
};
