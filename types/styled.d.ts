/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-empty-interface */
import "styled-components";
import "@xstyled/system";
import { Theme as RootTheme } from "../src/theme/Theme.interface";

interface AppTheme extends RootTheme {}

declare module "@xstyled/system" {
  export interface Theme extends AppTheme {}
}
declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}
