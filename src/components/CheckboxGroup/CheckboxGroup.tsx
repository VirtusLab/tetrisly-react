import {
  Children,
  FC,
  ForwardRefExoticComponent,
  isValidElement,
  PropsWithChildren,
  useMemo,
} from 'react';

import type { CheckboxGroupProps } from './CheckboxGroup.props';
import { stylesBuilder } from './stylesBuilder';
import { Checkbox, type CheckboxProps } from '../Checkbox';
import { HelperText } from '../HelperText';
import type { HelperTextConfig } from '../HelperText/HelperText.styles';
import { Label } from '../Label';
import { LabelConfig } from '../Label/Label.styles';

import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

type Props = FC<PropsWithChildren<CheckboxGroupProps & MarginProps>> & {
  Item: ForwardRefExoticComponent<CheckboxProps & MarginProps>;
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
    <tet.div {...styles.container} data-testid="checkbox-group" {...restProps}>
      <CheckboxGroupLabel label={label} styles={styles.label} />
      <tet.div
        {...styles.checkboxContainer}
        gridTemplateColumns={`repeat(${column}, 1fr)`}
        data-testid="checkbox-group-container"
      >
        {children}
      </tet.div>
      <CheckboxGroupHelperText
        helperText={helperText}
        styles={styles.helperText}
      />
    </tet.div>
  );
};

const CheckboxGroupLabel = ({
  label,
  styles,
}: {
  label: CheckboxGroupProps['label'];
  styles: LabelConfig;
}) => {
  if (!label) return null;
  if (typeof label === 'string')
    return (
      <Label label={label} custom={styles} data-testid="checkbox-group-label" />
    );
  return (
    <Label {...label} custom={styles} data-testid="checkbox-group-label" />
  );
};

const CheckboxGroupHelperText = ({
  helperText,
  styles,
}: {
  helperText: CheckboxGroupProps['helperText'];
  styles: HelperTextConfig;
}) => {
  if (!helperText) return null;

  if (typeof helperText === 'string')
    return (
      <HelperText
        text={helperText}
        custom={styles}
        data-testid="checkbox-group-helperText"
      />
    );

  return (
    <HelperText
      {...helperText}
      custom={styles}
      data-testid="checkbox-group-helperText"
    />
  );
};

CheckboxGroup.Item = Checkbox;
