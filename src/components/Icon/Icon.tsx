import { Icon as SVGIcon } from '@virtuslab/tetrisly-icons';
import { styled, system } from '@xstyled/styled-components';
import { FC } from 'react';

import type { IconProps } from './Icon.props';

import type { MarginProps } from '@/types/MarginProps';

const SVG = styled(SVGIcon)`
  ${system}
`;

export const Icon: FC<IconProps & MarginProps> = ({ custom, ...rest }) => (
  <SVG data-testid="icon" {...rest} {...custom} />
);
