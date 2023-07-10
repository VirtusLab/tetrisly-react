import { Preflight, ThemeProvider } from "@xstyled/styled-components";
import { theme } from "../theme";
import { PropsWithChildren } from "react";
import { GlobalStyles } from "../GlobalStyles.styled";
import { mergeObjects } from "../services/mergeObjects";
import { AbstractTheme } from "../theme/Theme.interface";

type ProviderProps = PropsWithChildren<{
  theme?: AbstractTheme;
  disableGlobalStyles?: boolean;
}>;

export const TetrislyProvider = ({
  children,
  theme: overrideTheme,
  disableGlobalStyles = false,
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
