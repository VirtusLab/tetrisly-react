import { IconName } from '@virtuslab/tetrisly-icons';
type PossibleSizes = 20 | 16;
type IconNameWithSize<T extends PossibleSizes = PossibleSizes> = IconName & `${T}-${string}`;
export type { IconNameWithSize as IconName };
