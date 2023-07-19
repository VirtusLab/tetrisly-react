import { th } from '@xstyled/system';
import { Theme } from '../theme';
export type AbstractTheme = Partial<{
    [key in keyof Theme]: Record<string, string | ReturnType<typeof th>>;
}>;
