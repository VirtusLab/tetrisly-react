import { Icon } from '@virtuslab/tetrisly-icons';
import styled from '@xstyled/styled-components';
import { forwardRef, useCallback, useId, useMemo } from 'react';

import type { CheckboxProps } from './Checkbox.props';
import { useIndeterminate } from './hooks';
import { stylesBuilder } from './stylesBuilder';
import { HelperText } from '../HelperText';

import { extractMarginProps } from '@/services';
import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

export const CheckboxIcon = styled(tet.div)`
  input + div > #checkmark {
    display: none;
    pointer-events: none;
  }

  input:checked + div > #checkmark {
    display: block;
  }
`;

export const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps & MarginProps
>(
  (
    {
      isChecked,
      isIndeterminate = false,
      state,
      label,
      helperText,
      custom,
      ...restProps
    },
    checkboxForwardRef,
  ) => {
    const styles = useMemo(() => stylesBuilder(custom), [custom]);
    const checkboxId = useId();
    const checkboxInternalRef = useIndeterminate(isIndeterminate);

    const [marginProps, checkboxProps] = extractMarginProps(restProps);

    const checkboxRef = useCallback(
      (instance: HTMLInputElement | null) => {
        checkboxInternalRef.current = instance;
        if (typeof checkboxForwardRef === 'function') {
          checkboxForwardRef(instance);
        } else if (checkboxForwardRef) {
          // eslint-disable-next-line no-param-reassign
          checkboxForwardRef.current = instance;
        }
      },
      [checkboxForwardRef, checkboxInternalRef],
    );

    const handleInputChange = useCallback(() => {
      if (!label) {
        checkboxInternalRef.current?.click();
        checkboxInternalRef.current?.focus();
      }
    }, [checkboxInternalRef, label]);

    const input = (
      <CheckboxIcon {...styles.checkboxContainer}>
        <tet.input
          {...styles.checkbox}
          type="checkbox"
          ref={checkboxRef}
          checked={isChecked}
          disabled={state === 'disabled'}
          data-state={state}
          id={checkboxId}
          data-testid="checkbox-input"
          {...checkboxProps}
        />
        <tet.div {...styles.checkboxIcon} onClick={handleInputChange}>
          {isIndeterminate && <Icon name="16-minus" />}
          <Icon name="16-check" id="checkmark" />
        </tet.div>
      </CheckboxIcon>
    );

    return (
      <tet.div
        {...styles.container}
        {...marginProps}
        data-state={state}
        data-testid="checkbox"
      >
        {label ? (
          <tet.label
            {...styles.label}
            htmlFor={checkboxId}
            data-testid="checkbox-label"
          >
            {input}
            {label}
          </tet.label>
        ) : (
          input
        )}
        {!!helperText && (
          <HelperText
            {...styles.helperText}
            intent={state === 'alert' ? 'alert' : 'none'}
            beforeIcon={state === 'alert'}
            text={helperText}
          />
        )}
      </tet.div>
    );
  },
);
