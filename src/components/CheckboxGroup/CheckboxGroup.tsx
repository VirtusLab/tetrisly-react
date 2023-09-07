import {
  Children,
  FC,
  isValidElement,
  PropsWithChildren,
  useMemo,
} from 'react';

import type {
  CheckboxGroupProps,
  CheckboxGroupItemProps,
} from './CheckboxGroup.props';
import { stylesBuilder } from './stylesBuilder';
import { Checkbox } from '../Checkbox';
import { HelperText } from '../HelperText';
import { Label } from '../Label';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

type Props = FC<PropsWithChildren<CheckboxGroupProps & MarginProps>> & {
  Item: FC<CheckboxGroupItemProps>;
};

export const CheckboxGroup: Props = ({
  column = 1,
  label,
  helperText,
  children,
  custom,
  ...restProps
}) => {
  const styles = useMemo(() => stylesBuilder(custom), [custom]);

  Children.map(children, (child) => {
    if (isValidElement(child) && child?.type !== CheckboxGroup.Item) {
      console.error(
        'You should use only CheckboxGroup.Item as a child of a CheckboxGroup component.',
      );
    }
  });

  return (
    <tet.div {...styles.container} {...restProps} data-testid="checkbox-group">
      {!!label &&
        (typeof label === 'string' ? (
          <Label
            label={label}
            custom={styles.label}
            data-testid="checkbox-group-label"
          />
        ) : (
          <Label
            {...label}
            custom={styles.label}
            data-testid="checkbox-group-label"
          />
        ))}
      <tet.div
        {...styles.checkboxContainer}
        gridTemplateColumns={`repeat(${column}, 1fr)`}
        data-testid="checkbox-group-container"
      >
        {children}
      </tet.div>
      {!!helperText &&
        (typeof helperText === 'string' ? (
          <HelperText
            text={helperText}
            custom={styles.helperText}
            data-testid="checkbox-group-helperText"
          />
        ) : (
          <HelperText
            {...helperText}
            custom={styles.helperText}
            data-testid="checkbox-group-helperText"
          />
        ))}
    </tet.div>
  );
};

CheckboxGroup.Item = Checkbox as FC<CheckboxGroupItemProps>;
