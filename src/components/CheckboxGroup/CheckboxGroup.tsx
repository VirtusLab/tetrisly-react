import { merge } from 'lodash';
import * as React from 'react';
import { Children, cloneElement, isValidElement } from 'react';

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

type Props = CheckboxGroupProps & MarginProps;

type CheckboxGroupComponent = React.FunctionComponent<Props> & {
  Item: React.FC<CheckboxItemProps>;
};

export const CheckboxGroup: CheckboxGroupComponent = ({
  name,
  column = 1,
  label,
  helperText,
  children,
  custom,
  ...restProps
}: Props) => {
  const { checkboxContainer: checkboxContainerStyles, ...restStyles } = custom
    ? merge(defaultConfig, custom)
    : defaultConfig;

  const checkboxes = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { name });
    }
    return child;
  });

  return (
    <tet.div {...restStyles} {...restProps} data-testid="checkbox-group">
      {!!label && <Label label={label} />}
      <tet.div
        {...checkboxContainerStyles}
        gridTemplateColumns={`repeat(${column}, 1fr)`}
        data-testid="checkbox-group-container"
      >
        {checkboxes}
      </tet.div>
      {!!helperText && <HelperText text={helperText} />}
    </tet.div>
  );
};

const Item: React.FC<CheckboxItemProps> = (props) => <Checkbox {...props} />;

CheckboxGroup.Item = Item;
