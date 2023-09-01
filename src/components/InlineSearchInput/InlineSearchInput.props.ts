import { SearchInputProps } from '../SearchInput';
import { TextInputProps } from '../TextInput';

export type InlineSearchInputProps = Omit<SearchInputProps, 'afterComponent'>;
