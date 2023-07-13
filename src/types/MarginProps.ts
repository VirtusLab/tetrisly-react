import {
  MarginBottomProps,
  MarginLeftProps,
  MarginProps as StyledMarginProps,
  MarginRightProps,
  MarginTopProps,
  MarginXProps,
  MarginYProps,
} from '@xstyled/styled-components';

export type MarginProps = StyledMarginProps &
  MarginLeftProps &
  MarginBottomProps &
  MarginTopProps &
  MarginRightProps &
  MarginXProps &
  MarginYProps;
