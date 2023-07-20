import { SystemProps } from '@xstyled/styled-components';

import { Theme } from '../../../theme';
import { StatusDotProps } from '../StatusDot.props';
import { config as defaultConfig } from '../StatusDot.styles';

function isKeyOf<T extends object>(
  obj: T,
  key: string
): key is Exclude<keyof T, number | symbol> {
  return key in obj;
}

export function stylesBuilder(props: StatusDotProps): SystemProps<Theme> {
  const { appearance, stroked, ...rest } = defaultConfig;

  if (!isKeyOf(appearance, props.appearance)) {
    throw new Error(`${props.appearance} is not a valid appearance`);
  }

  const appearanceProps = appearance[props.appearance];
  const strokedProps = props.stroked ? stroked : {};

  return {
    ...rest,
    ...appearanceProps,
    ...strokedProps,
  } as const;
}
