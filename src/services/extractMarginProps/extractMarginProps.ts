/**
 * Function extracts all spacing props (ex. ''m', 'ml', 'mr' etc.), returns array  with space props and rest objects
 */
import {
  MarginBottomProps,
  MarginLeftProps,
  MarginProps,
  MarginRightProps,
  MarginTopProps,
  MarginXProps,
  MarginYProps,
} from '@xstyled/styled-components';

interface MarginsProps
  extends MarginProps,
    MarginLeftProps,
    MarginBottomProps,
    MarginTopProps,
    MarginRightProps,
    MarginXProps,
    MarginYProps {}

const marginPropsKeys: (keyof MarginsProps)[] = [
  'm',
  'margin',
  'mt',
  'marginTop',
  'mr',
  'marginRight',
  'mb',
  'marginBottom',
  'ml',
  'marginLeft',
  'mx',
  'my',
];

type OmitMarginProps<T> = Omit<
  T,
  | 'm'
  | 'margin'
  | 'mt'
  | 'marginTop'
  | 'mr'
  | 'marginRight'
  | 'mb'
  | 'marginBottom'
  | 'ml'
  | 'marginLeft'
  | 'mx'
  | 'my'
>;

export const extractMarginProps = <T = object>(
  props: T
): [MarginsProps, OmitMarginProps<T>] => {
  if (!(props instanceof Object)) return [{}, {} as T];

  const marginsProps: MarginsProps = {};
  const restProps: OmitMarginProps<T> = {} as OmitMarginProps<T>;

  Object.entries(props).forEach(([key, value]: [string, unknown]) => {
    if (marginPropsKeys.includes(key as keyof MarginsProps)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (marginsProps as any)[key] = value;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (restProps as any)[key] = value;
    }
  });

  return [marginsProps, restProps];
};
