import { IconProps } from '@virtuslab/tetrisly-icons';
import { InputHTMLAttributes } from 'react';
import { TextInputConfig } from './TextInput.style';
import { TextInputType } from './TextInputType.type';
import { AvatarImageProps, AvatarInitialProps } from '../Avatar/Avatar.props';
import { GhostButtonProps } from '../Button/Button.props';
import { GhostIconButtonProps } from '../IconButton/IconButton.props';
import type { BasicInputState } from '../../types';
import { InnerComponent } from '../../types/InnerComponent';
export declare namespace TextInputProps.InnerComponents {
    type Icon = InnerComponent<'Icon', IconProps>;
    type IconButton = InnerComponent<'IconButton', Omit<GhostIconButtonProps, 'variant' | 'size'>>;
    type Dropdown = InnerComponent<'Dropdown', Pick<GhostButtonProps, 'label' | 'onClick'>>;
    type Prefix = InnerComponent<'Prefix', {
        text: string;
    }>;
    type Sufix = InnerComponent<'Sufix', {
        text: string;
    }>;
    type Button = InnerComponent<'Button', Pick<GhostButtonProps, 'label' | 'onClick'>>;
    type Avatar = InnerComponent<'Avatar', AvatarImageProps | AvatarInitialProps>;
}
export type TextInputProps = {
    type?: TextInputType;
    beforeComponent?: TextInputProps.InnerComponents.Icon | TextInputProps.InnerComponents.Avatar | TextInputProps.InnerComponents.Prefix | TextInputProps.InnerComponents.Dropdown;
    afterComponent?: TextInputProps.InnerComponents.Icon | TextInputProps.InnerComponents.IconButton | TextInputProps.InnerComponents.Sufix | TextInputProps.InnerComponents.Button | TextInputProps.InnerComponents.Dropdown;
    state?: BasicInputState;
    hasClearButton?: boolean;
    custom?: TextInputConfig;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'checked' | 'disabled' | 'color' | 'type'>;
