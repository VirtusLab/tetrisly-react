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
  MarginYProps { }

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

export const extractMarginProps = <T extends object = object>(
  props: T
): [MarginsProps, OmitMarginProps<T>] => {
  if (!(props instanceof Object)) return [{}, {} as T];

  const entries = Object.entries(props) as [keyof MarginProps, object][];
  const [marginsProps, restProps] = entries.reduce(
    ([margins, rest], [key, value]) => {
      if (marginPropsKeys.includes(key)) {
        return [{ ...margins, [key]: value }, rest];
      }
      return [margins, { ...rest, [key]: value }];
    },
    [{} as MarginProps, {} as OmitMarginProps<T>]
  );

  return [marginsProps, restProps];
};
