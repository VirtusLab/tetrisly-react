import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from 'react';

import type {
  RadioButtonGroupProps,
  RadioButtonGroupItemProps,
} from './RadioButtonGroup.props';
import { stylesBuilder } from './stylesBuilder';
import { HelperText } from '../HelperText';
import { Label } from '../Label';
import { RadioButton } from '../RadioButton';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

type Props = React.FC<
  PropsWithChildren<RadioButtonGroupProps & MarginProps>
> & {
  Item: React.FC<RadioButtonGroupItemProps>;
};

export const RadioButtonGroup: Props = ({
  name,
  column = 1,
  label,
  helperText,
  custom,
  children,
  ...restProps
}) => {
  const styles = useMemo(() => stylesBuilder(custom), [custom]);

  const radioButtons = Children.map(children, (child) => {
    if (isValidElement(child) && child?.type !== RadioButtonGroup.Item) {
      console.error(
        'You should use only RadioButtonGroup.Item as a child of a RadioButtonGroup component.',
      );
    }
    if (isValidElement(child)) {
      return cloneElement(child as ReactElement<RadioButtonGroupItemProps>, {
        name,
      });
    }
    return child;
  });

  return (
    <tet.div
      {...styles.container}
      data-testid="radio-button-group"
      {...restProps}
    >
      {!!label &&
        (typeof label === 'string' ? (
          <Label
            label={label}
            custom={styles.label}
            data-testid="radio-button-group-label"
          />
        ) : (
          <Label
            {...label}
            custom={styles.label}
            data-testid="radio-button-group-label"
          />
        ))}
      <tet.div
        {...styles.radioButtonContainer}
        gridTemplateColumns={`repeat(${column}, 1fr)`}
        data-testid="radio-button-group-radioButtonContainer"
      >
        {radioButtons}
      </tet.div>
      {!!helperText &&
        (typeof helperText === 'string' ? (
          <HelperText
            text={helperText}
            custom={styles.helperText}
            data-testid="radio-button-group-helperText"
          />
        ) : (
          <HelperText
            {...helperText}
            custom={styles.helperText}
            data-testid="radio-button-group-helperText"
          />
        ))}
    </tet.div>
  );
};

const Item: React.FC<RadioButtonGroupItemProps> = (props) => (
  <RadioButton {...props} />
);

RadioButtonGroup.Item = Item;
