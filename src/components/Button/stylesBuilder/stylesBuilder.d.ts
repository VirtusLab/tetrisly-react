import { SystemProps } from '@xstyled/styled-components';
import { StylesBuilderProps } from './stylesBuilder.props';
import { ButtonAppearance } from '../types/ButtonAppearance.type';
import { ButtonVariant } from '../types/ButtonType.type';
import { Theme } from '../../../theme';
export declare const stylesBuilder: <TVariant extends ButtonVariant, TAppearance extends ButtonAppearance<TVariant>>({ custom, ...props }: StylesBuilderProps<TVariant, TAppearance>) => SystemProps<Theme>;
