import { Preflight, ThemeProvider } from "@xstyled/styled-components";
import { theme } from ".";
import { ComponentProps, FC, PropsWithChildren } from "react";
import { GlobalStyles } from "./GlobalStyles.styled";

type ProviderProps = PropsWithChildren<{
  theme?: ComponentProps<typeof ThemeProvider>["theme"];
  disableGlobalStyles?: boolean;
}>;

export const TetrislyProvider: FC<ProviderProps> = ({
  children,
  theme: overrideTheme,
  disableGlobalStyles,
}) => {
  return (
    <ThemeProvider theme={overrideTheme ?? theme}>
      {!disableGlobalStyles && <GlobalStyles />}
      <Preflight />
      {children}
    </ThemeProvider>
  );
};
