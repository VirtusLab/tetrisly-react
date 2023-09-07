import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from 'react';

import type {
  RadioButtonGroupProps,
  RadioButtonGroupItemProps,
} from './RadioButtonGroup.props';
import { defaultConfig } from './RadioButtonGroup.styles';
import { HelperText } from '../HelperText';
import { Label } from '../Label';
import { RadioButton } from '../RadioButton';

import { mergeConfigWithCustom } from '@/services';
import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

type Props = FC<PropsWithChildren<RadioButtonGroupProps & MarginProps>> & {
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
  const {
    innerElements: { radioButtonContainer: radioButtonContainerStyles },
    ...restStyles
  } = mergeConfigWithCustom({ defaultConfig, custom });

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
    <tet.div {...restStyles} {...restProps} data-testid="radio-button-group">
      {!!label &&
        (typeof label === 'string' ? (
          <Label label={label} />
        ) : (
          <Label {...label} />
        ))}
      <tet.div
        {...radioButtonContainerStyles}
        gridTemplateColumns={`repeat(${column}, 1fr)`}
        data-testid="radio-button-group-container"
      >
        {radioButtons}
      </tet.div>
      {!!helperText &&
        (typeof helperText === 'string' ? (
          <HelperText text={helperText} />
        ) : (
          <HelperText {...helperText} />
        ))}
    </tet.div>
  );
};

const Item: FC<RadioButtonGroupItemProps> = (props) => (
  <RadioButton {...props} />
);

RadioButtonGroup.Item = Item;
