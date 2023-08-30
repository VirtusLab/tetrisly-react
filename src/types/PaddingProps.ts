import {
  PaddingBottomProps,
  PaddingLeftProps,
  PaddingProps as StyledPaddingProps,
  PaddingRightProps,
  PaddingTopProps,
  PaddingXProps,
  PaddingYProps,
} from '@xstyled/styled-components';

export type PaddingProps = StyledPaddingProps &
  PaddingLeftProps &
  PaddingBottomProps &
  PaddingTopProps &
  PaddingRightProps &
  PaddingXProps &
  PaddingYProps;
