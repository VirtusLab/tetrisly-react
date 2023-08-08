import { SystemProps } from '@xstyled/styled-components';
import { config } from './Label.styles';
import { Theme } from '../../theme';
import { DeepPartial } from '../../utility-types/DeepPartial';
export type LabelProps = {
    label: string;
    tooltip?: boolean;
    optional?: string;
    custom?: DeepPartial<SystemProps<Theme> & typeof config>;
};
