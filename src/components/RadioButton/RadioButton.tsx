import { forwardRef, useId, useMemo } from 'react';

import type { RadioButtonProps } from './RadioButton.props';
import { stylesBuilder } from './stylesBuilder';
import { HelperText } from '../HelperText';

import { extractInputProps } from '@/services';
import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

export const RadioButton = forwardRef<
  HTMLInputElement,
  RadioButtonProps & MarginProps
>(
  (
    { isChecked, onChange, state, label, helperText, custom, ...restProps },
    radioButtonRef,
  ) => {
    const [radioButtonProps, containerProps] = extractInputProps(restProps);

    const styles = useMemo(() => stylesBuilder(custom), [custom]);

    const radioButtonId = useId();

    if (state === 'alert' && isChecked) {
      console.warn('RadioButton: Checked alert state does not exist.');
    }

    if (
      (isChecked !== undefined && onChange === undefined) ||
      (isChecked === undefined && onChange !== undefined)
    ) {
      console.warn(
        'RadioButton: isChecked and onChange must be both defined or both undefined.',
      );
    }

    const isAlert = state === 'alert' && !isChecked;

    const input = (
      <tet.input
        type="radio"
        ref={radioButtonRef}
        id={radioButtonId}
        checked={isChecked}
        onChange={onChange}
        disabled={state === 'disabled'}
        data-state={state}
        {...styles.radioButton}
        data-testid="radio-button-radioButton"
        {...radioButtonProps}
      />
    );

    return (
      <tet.div
        {...styles.container}
        data-state={state}
        data-testid="radio-button"
        {...containerProps}
      >
        {label ? (
          <tet.label
            htmlFor={radioButtonId}
            {...styles.label}
            data-testid="radio-button-label"
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
            intent={isAlert ? 'alert' : 'none'}
            hasBeforeIcon={isAlert}
            text={helperText}
            data-testid="radio-button-helperText"
          />
        )}
      </tet.div>
    );
  },
);
