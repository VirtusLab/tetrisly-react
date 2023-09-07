import { forwardRef, useId, useMemo } from 'react';

import type { RadioButtonProps } from './RadioButton.props';
import { stylesBuilder } from './stylesBuilder';
import { HelperText } from '../HelperText';

import { extractMarginProps } from '@/services';
import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

type Props = RadioButtonProps & MarginProps;

export const RadioButton = forwardRef<HTMLInputElement, Props>(
  (
    { isChecked, state, label, helperText, custom, ...restProps },
    radioButtonRef,
  ) => {
    const [marginProps, radioButtonProps] =
      extractMarginProps<Props>(restProps);

    const styles = useMemo(() => stylesBuilder(custom), [custom]);

    const radioButtonId = useId();

    const input = (
      <tet.input
        type="radio"
        ref={radioButtonRef}
        id={radioButtonId}
        checked={isChecked}
        disabled={state === 'disabled'}
        data-state={state}
        {...styles.radioButton}
        {...radioButtonProps}
        data-testid="radio-button-radioButton"
      />
    );

    return (
      <tet.div
        {...styles.container}
        {...marginProps}
        data-state={state}
        data-testid="radio-button"
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
          <tet.span
            {...styles.helperText}
            data-testid="radio-button-helperText"
          >
            <HelperText
              intent={state === 'alert' ? 'alert' : 'none'}
              beforeIcon={state === 'alert'}
              text={helperText}
            />
          </tet.span>
        )}
      </tet.div>
    );
  },
);
