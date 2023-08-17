import { SystemProps } from '@xstyled/styled-components';
import { config } from './Badge.styles';
import { Theme } from '../../theme';
import type { BasicAppearance, BasicIntent } from '../../types';
import { DeepPartial } from '../../utility-types/DeepPartial';
import { IconName } from '../../utility-types/IconName';
import { Or } from '../../utility-types/Or';
export type BadgeProps = Or<{
    appearance: BasicAppearance;
}, {
    intent: BasicIntent;
}> & Or<{
    label: string;
    beforeIcon?: IconName<16>;
    afterIcon?: IconName<16>;
}, {
    icon: IconName<16>;
}> & {
    emphasis?: 'high' | 'medium' | 'low';
    custom?: DeepPartial<SystemProps<Theme> & typeof config>;
};
