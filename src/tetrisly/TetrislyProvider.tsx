import { Preflight, ThemeProvider, Theme } from '@xstyled/styled-components';
import { PropsWithChildren } from 'react';

import { mergeObjects } from '@/services/mergeObjects';
import { theme } from '@/theme';
import { TwoPartial } from '@/utility-types/TwoPartial';

type ProviderProps = PropsWithChildren<{
  theme?: TwoPartial<Theme>;
  preflight?: boolean;
}>;

export const TetrislyProvider = ({
  children,
  theme: overrideTheme,
  preflight = true,
}: ProviderProps) => {
  const providerTheme =
    overrideTheme === undefined ? theme : mergeObjects(theme, overrideTheme);
  return (
    <ThemeProvider theme={providerTheme}>
      {preflight && <Preflight />}
      {children}
    </ThemeProvider>
  );
};
