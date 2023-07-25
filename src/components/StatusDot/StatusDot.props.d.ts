import { SystemProps } from '@xstyled/styled-components';
import { config } from './StatusDot.styles';
import { StatusDotAppearance } from './StatusDotAppearance.type';
import { Theme } from '../../theme';
import { DeepPartial } from '../../utility-types/DeepPartial';
export type StatusDotProps = {
    appearance: StatusDotAppearance;
    stroked?: boolean;
    custom?: DeepPartial<SystemProps<Theme> & typeof config>;
};
