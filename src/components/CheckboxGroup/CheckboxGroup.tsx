import { Children, FC, isValidElement, PropsWithChildren } from 'react';

import type {
  CheckboxGroupProps,
  CheckboxGroupItemProps,
} from './CheckboxGroup.props';
import { defaultConfig } from './CheckboxGroup.style';
import { Checkbox } from '../Checkbox';
import { HelperText } from '../HelperText';
import { Label } from '../Label';

import { mergeConfigWithCustom } from '@/services';
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
  const {
    innerElements: { checkboxContainer: checkboxContainerStyles },
    ...restStyles
  } = mergeConfigWithCustom({ defaultConfig, custom });

  Children.map(children, (child) => {
    if (isValidElement(child) && child?.type !== CheckboxGroup.Item) {
      console.error(
        'You should use only CheckboxGroup.Item as a child of a CheckboxGroup component.',
      );
    }
  });

  return (
    <tet.div {...restStyles} {...restProps} data-testid="checkbox-group">
      {!!label &&
        (typeof label === 'string' ? (
          <Label label={label} />
        ) : (
          <Label {...label} />
        ))}
      <tet.div
        {...checkboxContainerStyles}
        gridTemplateColumns={`repeat(${column}, 1fr)`}
        data-testid="checkbox-group-container"
      >
        {children}
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

const Item: FC<CheckboxGroupItemProps> = (props) => <Checkbox {...props} />;

CheckboxGroup.Item = Item;
