import { SystemProps } from '@xstyled/styled-components';

import { HelperTextProps } from '../HelperText.props';
import { config as defaultConfig } from '../HelperText.styles';

import { isKeyOf } from '@/services/isKeyOf';
import { Theme } from '@/theme/Theme.interface';

export function stylesBuilder(props: HelperTextProps): SystemProps<Theme> {
  const { intent, ...rest } = defaultConfig;

  if (!isKeyOf(intent, props.intent)) {
    throw new Error(`${props.intent} is not a valid intent`);
  }

  const intentProps = intent[props.intent];

  return {
    ...rest,
    ...intentProps,
  } as const;
}
