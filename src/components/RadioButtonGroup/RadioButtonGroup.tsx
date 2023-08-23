import { merge } from 'lodash';
import {
  Children,
  cloneElement,
  FC,
  FunctionComponent,
  isValidElement,
} from 'react';

import type {
  RadioButtonGroupProps,
  RadioButtonItemProps,
} from './RadioButtonGroup.props';
import { config as defaultConfig } from './RadioButtonGroup.styles';
import { HelperText } from '../HelperText';
import { Label } from '../Label';
import { RadioButton } from '../RadioButton';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

type Props = RadioButtonGroupProps & MarginProps;

type RadioButtonGroupComponent = FunctionComponent<Props> & {
  Item: React.FC<RadioButtonItemProps>;
};

export const RadioButtonGroup: RadioButtonGroupComponent = ({
  name,
  column = 1,
  label,
  helperText,
  custom,
  children,
  ...restProps
}: Props) => {
  const { checkboxContainer: checkboxContainerStyles, ...restStyles } = custom
    ? merge(defaultConfig, custom)
    : defaultConfig;

  const radioButtons = Children.map(children, (child) => {
    if (child?.type !== RadioButtonGroup.Item) {
      console.error(
        'You should use only RadioButtonGroup.Item as a child of a RadioButtonGroup component.'
      );
    }
    if (isValidElement(child)) {
      return cloneElement(child, { name });
    }
    return child;
  });

  return (
    <tet.div {...restStyles} {...restProps} data-testid="radio-button-group">
      {!!label && <Label label={label} />}
      <tet.div
        {...checkboxContainerStyles}
        gridTemplateColumns={`repeat(${column}, 1fr)`}
        data-testid="radio-button-group-container"
      >
        {radioButtons}
      </tet.div>
      {!!helperText && <HelperText text={helperText} />}
    </tet.div>
  );
};

const Item: FC<RadioButtonItemProps> = (props) => <RadioButton {...props} />;

RadioButtonGroup.Item = Item;
