import {
  Preflight,
  ThemeProvider,
  Theme,
  createGlobalStyle,
} from '@xstyled/styled-components';
import { PropsWithChildren } from 'react';

import { mergeObjects } from '@/services/mergeObjects';
import { theme } from '@/theme';
import { TwoPartial } from '@/utility-types/TwoPartial';

type ProviderProps = PropsWithChildren<{
  theme?: TwoPartial<Theme>;
  preflight?: boolean;
}>;

const GlobalStyle = createGlobalStyle`
  * {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  /* clears the ‘X’ from Internet Explorer */
  input[type=search]::-ms-clear { display: none; width : 0; height: 0; }
  input[type=search]::-ms-reveal { display: none; width : 0; height: 0; }
  /* clears the ‘X’ from Chrome */
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration { display: none; }
`;

export const TetrislyProvider = ({
  children,
  theme: overrideTheme,
  preflight = true,
}: ProviderProps) => {
  const providerTheme =
    overrideTheme === undefined ? theme : mergeObjects(theme, overrideTheme);
  return (
    <ThemeProvider theme={providerTheme}>
      <GlobalStyle />
      {preflight && <Preflight />}
      {children}
    </ThemeProvider>
  );
};
