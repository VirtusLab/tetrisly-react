import type { FC } from 'react';

import { IconButtonProps } from './IconButton.props';
import { defaultConfig } from './IconButton.styles';
import { Button, type ButtonProps } from '../Button';

import { mergeConfigWithCustom } from '@/services';
import type { MarginProps } from '@/types';

const mapperIconButtonPropsToButtonProps = ({
  children,
  ...props
}: IconButtonProps): ButtonProps => {
  const appearance =
    props.appearance === 'primary' ? 'secondary' : props.appearance;

  return {
    ...props,
    appearance,
    intent: props.intent,
    beforeIcon: props.icon,
    label: '',
  } as ButtonProps;
};

export const IconButton: FC<IconButtonProps & MarginProps> = (props) => {
  const buttonProps = mapperIconButtonPropsToButtonProps(props);
  const custom = mergeConfigWithCustom({
    defaultConfig,
    custom: buttonProps.custom,
  });
  return <Button {...buttonProps} custom={custom} />;
};
