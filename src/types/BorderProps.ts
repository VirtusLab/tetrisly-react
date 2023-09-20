import {
  BorderBottomColorProps,
  BorderBottomWidthProps,
  BorderWidthProps,
  BorderProps as StyledBorderProps,
} from '@xstyled/styled-components';

export type BorderProps = BorderWidthProps &
  BorderBottomWidthProps &
  BorderBottomColorProps &
  StyledBorderProps;
