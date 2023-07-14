import { Preflight, ThemeProvider } from "@xstyled/styled-components";
import { theme } from "@/theme";
import { PropsWithChildren } from "react";
import { Theme } from "@xstyled/styled-components";
import { TwoPartial } from "@/utility-types/TwoPartial";
import { mergeObjects } from "@/services/mergeObjects";

type ProviderProps = PropsWithChildren<{
  theme?: TwoPartial<Theme>;
  preflight?: boolean;
}>;

export const TetrislyProvider = ({
  children,
  theme: overrideTheme,
  preflight = true
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
