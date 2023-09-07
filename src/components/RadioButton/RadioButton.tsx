import { forwardRef, useId } from 'react';

import { RadioButtonProps } from './RadioButton.props';
import { defaultConfig } from './RadioButton.styles';
import { HelperText } from '../HelperText';

import { extractMarginProps, mergeConfigWithCustom } from '@/services';
import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

type Props = RadioButtonProps & MarginProps;

export const RadioButton = forwardRef<HTMLInputElement, Props>(
  (
    { isChecked, state, label, helperText, custom = {}, ...restProps },
    radioButtonRef,
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
    } = mergeConfigWithCustom({ defaultConfig, custom });

    const radioButtonId = useId();

    const input = (
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
    );

    return (
      <tet.div
        {...restStyles}
        {...marginProps}
        data-state={state}
        data-testid="radio-button"
      >
        {label ? (
          <tet.label
            htmlFor={radioButtonId}
            {...labelStyles}
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
            intent={state === 'alert' ? 'alert' : 'none'}
            beforeIcon={state === 'alert'}
            {...helperTextStyles}
            text={helperText}
          />
        )}
      </tet.div>
    );
  },
);
