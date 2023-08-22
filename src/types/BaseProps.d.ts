import { SystemProps } from '@xstyled/styled-components';
import { Theme } from '../theme';
export type BaseProps = Omit<SystemProps<Theme>, 'appearance'>;
