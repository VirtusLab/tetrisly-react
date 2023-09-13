import { MarginProps } from '@xstyled/styled-components';
import { FC } from 'react';

import { IconButtonProps } from './IconButton.props';
import { defaultConfig } from './IconButton.styles';
import { Button, ButtonProps } from '../Button';

import { mergeConfigWithCustom } from '@/services';

const mapperIconButtonPropsToButtonProps = ({
  children,
  ...props
}: IconButtonProps): ButtonProps => {
  const appearance =
    props.appearance === 'primary' ? 'secondary' : props.appearance;
  const intent = props.intent === 'negative' ? 'destructive' : props.intent;
  const beforeIcon = props.icon;

  return {
    ...props,
    appearance,
    intent,
    beforeIcon,
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
