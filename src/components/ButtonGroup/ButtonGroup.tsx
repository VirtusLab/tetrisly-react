import { MarginProps } from '@xstyled/styled-components';
import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  useMemo,
  type FC,
} from 'react';

import { ButtonGroupProps } from './ButtonGroup.props';
import { stylesBuilder } from './stylesBuilder';
import { Button, ButtonProps } from '../Button';

import { tet } from '@/tetrisly';

type Props = FC<PropsWithChildren<ButtonGroupProps & MarginProps>> & {
  Item: FC<ButtonProps & MarginProps>;
};

export const ButtonGroup: Props = ({
  size = 'medium',
  children,
  custom,
  ...rest
}) => {
  const styles = useMemo(
    () =>
      stylesBuilder({
        size,
        custom,
      }),
    [custom, size],
  );

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child?.type !== ButtonGroup.Item) {
      console.error(
        'You should use only ButtonGroup.Item as a child of a CheckboxGroup component.',
      );
    }
  });

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...styles.button });
    }
    return child;
  });

  return (
    <tet.span data-testid="button-group" {...styles.container} {...rest}>
      {childrenWithProps}
    </tet.span>
  );
};

ButtonGroup.Item = Button;
