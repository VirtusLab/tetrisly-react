import { merge } from 'lodash';
import { Children, FC, isValidElement, PropsWithChildren } from 'react';

import type {
  CheckboxGroupProps,
  CheckboxItemProps,
} from './CheckboxGroup.props';
import { config as defaultConfig } from './CheckboxGroup.style';
import { Checkbox } from '../Checkbox';
import { HelperText } from '../HelperText';
import { Label } from '../Label';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types';

type Props = FC<PropsWithChildren<CheckboxGroupProps & MarginProps>> & {
  Item: FC<CheckboxItemProps>;
};

export const CheckboxGroup: Props = ({
  column = 1,
  label,
  helperText,
  children,
  custom,
  ...restProps
}) => {
  const {
    innerElements: { checkboxContainer: checkboxContainerStyles },
    ...restStyles
  } = merge(defaultConfig, custom);

  Children.map(children, (child) => {
    if (isValidElement(child) && child?.type !== CheckboxGroup.Item) {
      console.error(
        'You should use only CheckboxGroup.Item as a child of a CheckboxGroup component.',
      );
    }
  });

  return (
    <tet.div {...restStyles} {...restProps} data-testid="checkbox-group">
      {!!label && <Label label={label} />}
      <tet.div
        {...checkboxContainerStyles}
        gridTemplateColumns={`repeat(${column}, 1fr)`}
        data-testid="checkbox-group-container"
      >
        {children}
      </tet.div>
      {!!helperText && <HelperText text={helperText} />}
    </tet.div>
  );
};

const Item: FC<CheckboxItemProps> = (props) => <Checkbox {...props} />;

CheckboxGroup.Item = Item;
