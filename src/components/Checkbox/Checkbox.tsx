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

export const CheckboxContainer = styled(tet.div)`
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
      <CheckboxContainer
        {...styles.checkboxContainer}
        data-testid="checkbox-checkboxContainer"
      >
        <tet.input
          {...styles.input}
          type="checkbox"
          ref={checkboxRef}
          checked={isChecked}
          disabled={state === 'disabled'}
          data-state={state}
          id={checkboxId}
          data-testid="checkbox-input"
          {...checkboxProps}
        />
        <tet.div
          {...styles.checkboxIcon}
          onClick={handleInputChange}
          data-testid="checkbox-checkboxIcon"
        >
          {isIndeterminate && <Icon name="16-minus" />}
          <Icon name="16-check" id="checkmark" />
        </tet.div>
      </CheckboxContainer>
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
            custom={styles.helperText}
            intent={state === 'alert' ? 'alert' : 'none'}
            beforeIcon={state === 'alert'}
            text={helperText}
            data-testid="checkbox-helperText"
          />
        )}
      </tet.div>
    );
  },
);
