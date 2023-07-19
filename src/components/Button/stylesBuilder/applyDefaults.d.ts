import { StylesBuilderProps } from './stylesBuilder.props';
import { ButtonAppearance } from '../types/ButtonAppearance.type';
import { ButtonVariant } from '../types/ButtonType.type';
export declare function applyDefaults<TVariant extends ButtonVariant, TAppearance extends ButtonAppearance<TVariant>>({ appearance, intent, size, variant, }: StylesBuilderProps<TVariant, TAppearance>): Required<Omit<StylesBuilderProps<TVariant, TAppearance>, 'custom'>>;
