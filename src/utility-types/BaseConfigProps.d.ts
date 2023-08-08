import { SystemProps } from '@xstyled/styled-components';
import { Theme } from '../theme';
export type BaseConfigProps = Omit<SystemProps<Theme>, 'appearance'>;
