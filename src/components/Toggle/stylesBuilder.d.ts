import { ToggleConfig } from './Toggle.styles.ts';
import { HelperTextConfig } from '../../components/HelperText/HelperText.styles.ts';
import { BaseProps } from '../../types/BaseProps.ts';
type ToggleStylesBuilder = {
    container: BaseProps;
    toggleOval: BaseProps;
    slider: BaseProps;
    input: BaseProps;
    label: BaseProps;
    labelContainer: BaseProps;
    helperText: HelperTextConfig;
};
export declare const stylesBuilder: (size: 'small' | 'large', custom?: ToggleConfig) => ToggleStylesBuilder;
export {};
