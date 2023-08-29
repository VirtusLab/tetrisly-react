import { LabelConfig } from './Label.styles';
import { DeepPartial } from '../../utility-types/DeepPartial';
export type LabelProps = {
    label: string;
    tooltip?: boolean;
    optional?: string;
    custom?: DeepPartial<LabelConfig>;
};
