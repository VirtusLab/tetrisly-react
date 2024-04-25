import { StatusConfig } from './Status.styles';
import type { StatusAppearance } from './StatusAppearance.type';
import type { StatusEmphasis } from './StatusEmphasis.type';
import { BaseProps } from '../../types';
type StylesBuilderParams = {
    container: BaseProps;
    dot: BaseProps;
};
export declare const stylesBuilder: (appearance?: StatusAppearance, custom?: StatusConfig, emphasis?: StatusEmphasis) => StylesBuilderParams;
export {};
