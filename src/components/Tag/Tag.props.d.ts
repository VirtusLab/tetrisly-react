import { SyntheticEvent } from 'react';
import { TagConfig } from '../../components/Tag/Tag.styles.ts';
import { TextInputProps } from '../../components/TextInput';
export type TagProps = {
    label: string;
    state?: 'selected' | 'disabled';
    beforeComponent?: TextInputProps.InnerComponents.Avatar;
    onClick?: (e: SyntheticEvent<HTMLSpanElement>) => void;
    onCloseClick?: (e: SyntheticEvent<HTMLButtonElement>) => void;
    custom?: TagConfig;
};
