import { Icon } from '@virtuslab/tetrisly-icons';
import { merge } from 'lodash';
import { forwardRef, useEffect, useId, useRef, useState } from 'react';

import type { CheckboxProps } from './Checkbox.props';
import { config as defaultConfig } from './Checkbox.styles';
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
    const [isIconChecked, setIsIconChecked] = useState(isChecked);

    const [marginProps, { onChange: onCheckboxChange, ...checkboxProps }] =
      extractMarginProps<Props>(restProps);

    const checkboxId = useId();

    const checkboxLocalRef = useRef<HTMLInputElement | null>(null);

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

    useEffect(() => {
      if (checkboxLocalRef.current !== null) {
        checkboxLocalRef.current.indeterminate = isIndeterminate;
      }
    }, [checkboxLocalRef, isIndeterminate]);

    useEffect(() => {
      setIsIconChecked(isChecked);
    }, [isChecked]);

    return (
      <tet.div {...defaultStyles} {...marginProps} data-testid="checkbox">
        <tet.label
          htmlFor={checkboxId}
          {...labelStyles}
          data-testid="checkbox-label"
        >
          <tet.div {...checkboxContainerStyles}>
            <tet.input
              type="checkbox"
              ref={(instance) => {
                checkboxLocalRef.current = instance;
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
