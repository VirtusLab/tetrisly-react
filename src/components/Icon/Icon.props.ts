import { IconName } from '@virtuslab/tetrisly-icons';

import type { BaseProps } from '@/types/BaseProps';

export type IconProps = {
  name: IconName;
  color?: BaseProps['color'];
  custom?: BaseProps;
};
