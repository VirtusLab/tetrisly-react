import { Icon } from '@virtuslab/tetrisly-icons';
import { merge } from 'lodash';
import { forwardRef, useId } from 'react';

import type { CheckboxProps } from './Checkbox.props';
import { config as defaultConfig } from './Checkbox.styles';
import { useIconChecked, useIndeterminate } from './hooks';
import { HelperText } from '../HelperText';

import { extractMarginProps } from '@/services';
import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

type Props = CheckboxProps & MarginProps;

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  (
    {
      isChecked,
      isIndeterminate = false,
      state,
      label,
      helperText,
      custom = {},
      ...restProps
    },
    checkboxForwardRef
  ) => {
    const [marginProps, { onChange: onCheckboxChange, ...checkboxProps }] =
      extractMarginProps<Props>(restProps);

    const [isIconChecked, setIsIconChecked] = useIconChecked(isChecked);

    const checkboxId = useId();

    const checkboxRef = useIndeterminate(isIndeterminate);

    const options = merge(defaultConfig, custom);
    const {
      innerComponents: {
        checkbox: checkboxStyles,
        checkboxContainer: checkboxContainerStyles,
        checkboxIcon: checkboxIconStyles,
        label: labelStyles,
        helperText: helperTextStyles,
      },
      ...defaultStyles
    } = options;

    return (
      <tet.div
        {...defaultStyles}
        {...marginProps}
        data-state={state}
        data-testid="checkbox"
      >
        <tet.label
          htmlFor={checkboxId}
          {...labelStyles}
          data-testid="checkbox-label"
        >
          <tet.div {...checkboxContainerStyles}>
            <tet.input
              type="checkbox"
              ref={(instance) => {
                checkboxRef.current = instance;
                if (typeof checkboxForwardRef === 'function') {
                  checkboxForwardRef(instance);
                } else if (checkboxForwardRef) {
                  // eslint-disable-next-line no-param-reassign
                  checkboxForwardRef.current = instance;
                }
              }}
              checked={isChecked}
              disabled={state === 'disabled'}
              data-state={state}
              id={checkboxId}
              onChange={(e) => {
                if (onCheckboxChange) {
                  onCheckboxChange(e);
                } else {
                  setIsIconChecked(e.target.checked);
                }
              }}
              {...checkboxProps}
              {...checkboxStyles}
            />
            <tet.div {...checkboxIconStyles}>
              {isIconChecked ? (
                <Icon name="16-check" />
              ) : (
                isIndeterminate && <Icon name="16-minus" />
              )}
            </tet.div>
          </tet.div>
          {label}
        </tet.label>
        {!!helperText && (
          <HelperText
            intent={state === 'alert' ? 'alert' : 'none'}
            beforeIcon={state === 'alert'}
            {...helperTextStyles}
            text={helperText}
          />
        )}
      </tet.div>
    );
  }
);
