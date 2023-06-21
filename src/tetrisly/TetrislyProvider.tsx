import { Preflight, ThemeProvider } from "@xstyled/styled-components";
import { theme } from "../theme";
import { PropsWithChildren } from "react";
import { GlobalStyles } from "../GlobalStyles.styled";
import { Theme } from "@xstyled/styled-components";
import { TwoPartial } from "../utility-types/TwoPartial";
import { mergeObjects } from "../services/mergeObjects";

type ProviderProps = PropsWithChildren<{
  theme?: TwoPartial<Theme>;
  disableGlobalStyles?: boolean;
}>;

export const TetrislyProvider = ({
  children,
  theme: overrideTheme,
  disableGlobalStyles,
}: ProviderProps) => {
  const providerTheme =
    overrideTheme === undefined ? theme : mergeObjects(theme, overrideTheme);
  return (
    <ThemeProvider theme={providerTheme}>
      {!disableGlobalStyles && <GlobalStyles />}
      <Preflight />
      {children}
    </ThemeProvider>
  );
};
