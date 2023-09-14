import type { TextInputProps } from '../TextInput';
export type SelectProps = Omit<TextInputProps, 'beforeComponent' | 'afterComponent' | 'type'> & {
    beforeComponent?: TextInputProps.InnerComponents.Icon | TextInputProps.InnerComponents.Avatar;
};
