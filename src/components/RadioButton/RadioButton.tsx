import { merge } from 'lodash';
import { forwardRef, useId } from 'react';

import { RadioButtonProps } from './RadioButton.props';
import { config as defaultConfig } from './RadioButton.styles';
import { HelperText } from '../HelperText';

import { extractMarginProps } from '@/services';
import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

type Props = RadioButtonProps & MarginProps;

export const RadioButton = forwardRef<HTMLInputElement, Props>(
  (
    { isChecked, state, label, helperText, custom = {}, ...restProps },
    radioButtonRef
  ) => {
    const [marginProps, radioButtonProps] =
      extractMarginProps<Props>(restProps);

    const {
      innerComponents: {
        radioButton: radioButtonStyles,
        label: labelStyles,
        helperText: helperTextStyles,
      },
      ...restStyles
    } = merge(defaultConfig, custom);

    const radioButtonId = useId();

    return (
      <tet.div
        {...restStyles}
        {...marginProps}
        data-state={state}
        data-testid="radio-button"
      >
        <tet.label
          {...labelStyles}
          htmlFor={radioButtonId}
          data-testid="radio-button-label"
        >
          <tet.input
            type="radio"
            ref={radioButtonRef}
            id={radioButtonId}
            checked={isChecked}
            disabled={state === 'disabled'}
            data-state={state}
            {...radioButtonProps}
            {...radioButtonStyles}
          />
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
