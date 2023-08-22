import { IconProps } from '@virtuslab/tetrisly-icons';
import { SystemProps } from '@xstyled/styled-components';
import { InputHTMLAttributes } from 'react';
import { config } from './TextInput.style';
import { TextInputType } from './TextInputType.type';
import { ButtonProps } from '../Button';
import { Theme } from '../../theme';
import type { BasicInputState } from '../../types';
import { InnerComponent } from '../../types/InnerComponent';
import { DeepPartial } from '../../utility-types/DeepPartial';
export type TextInputProps = {
    type?: TextInputType;
    beforeComponent?: InnerComponent<'Icon', IconProps> | InnerComponent<'Prefix', {
        text: string;
    }> | InnerComponent<'Dropdown', Pick<ButtonProps<'ghost'>, 'label' | 'onClick'>>;
    afterComponent?: InnerComponent<'Icon', IconProps> | InnerComponent<'Sufix', {
        text: string;
    }> | InnerComponent<'Button', Pick<ButtonProps<'ghost'>, 'label' | 'onClick'>> | InnerComponent<'Dropdown', Pick<ButtonProps<'ghost'>, 'label' | 'onClick'>>;
    state?: BasicInputState;
    hasClearButton?: boolean;
    custom?: DeepPartial<SystemProps<Theme> & typeof config>;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled' | 'color' | 'type'>;
