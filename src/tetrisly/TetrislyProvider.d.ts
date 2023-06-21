import { PropsWithChildren } from "react";
import { Theme } from "@xstyled/styled-components";
import { TwoPartial } from "../utility-types/TwoPartial";
type ProviderProps = PropsWithChildren<{
    theme?: TwoPartial<Theme>;
    disableGlobalStyles?: boolean;
}>;
export declare const TetrislyProvider: ({ children, theme: overrideTheme, disableGlobalStyles, }: ProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
