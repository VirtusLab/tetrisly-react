import { Theme as DefaultTheme } from "./Theme.interface";
declare const themeExtension: {
    screens: {
        _: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        '2xl': number;
    };
    states: {
        disabled: string;
        selected: string;
        loading: string;
        alert: string;
        _: null;
        motionSafe: string;
        motionReduce: string;
        first: string;
        last: string;
        odd: string;
        even: string;
        visited: string;
        checked: string;
        focusWithin: string;
        hover: string;
        focus: string;
        focusVisible: string;
        active: string;
        placeholder: string;
    };
    ringWidths: import("./Theme.interface").BorderWidths;
};
export declare const theme: Theme;
export type Theme = DefaultTheme & typeof themeExtension;
export {};
