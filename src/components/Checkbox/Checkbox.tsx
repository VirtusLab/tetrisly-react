import { Icon } from '@virtuslab/tetrisly-icons';
import styled from '@xstyled/styled-components';
import { forwardRef, useId } from 'react';

import type { CheckboxProps } from './Checkbox.props';
import { defaultConfig } from './Checkbox.styles';
import { useIndeterminate } from './hooks';
import { HelperText } from '../HelperText';

import { extractMarginProps, mergeConfigWithCustom } from '@/services';
import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

type Props = CheckboxProps & MarginProps;

export const CheckboxIcon = styled(tet.div)`
  input + div > #checkmark {
    display: none;
    pointer-events: none;
  }

  input:checked + div > #checkmark {
    display: block;
  }
`;

export const Checkbox = forwardRef<HTMLInputElement, Props>(
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
    const [marginProps, checkboxProps] = extractMarginProps<Props>(restProps);

    const options = mergeConfigWithCustom({ defaultConfig, custom });
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

    const checkboxId = useId();

    const checkboxInternalRef = useIndeterminate(isIndeterminate);

    const checkboxRef = (instance: HTMLInputElement | null) => {
      checkboxInternalRef.current = instance;
      if (typeof checkboxForwardRef === 'function') {
        checkboxForwardRef(instance);
      } else if (checkboxForwardRef) {
        // eslint-disable-next-line no-param-reassign
        checkboxForwardRef.current = instance;
      }
    };

    const handleInputChange = () => {
      checkboxInternalRef.current?.click();
      checkboxInternalRef.current?.focus();
    };

    const input = (
      <CheckboxIcon {...checkboxContainerStyles}>
        <tet.input
          type="checkbox"
          ref={checkboxRef}
          checked={isChecked}
          disabled={state === 'disabled'}
          data-state={state}
          id={checkboxId}
          {...checkboxProps}
          {...checkboxStyles}
        />
        <tet.div
          {...checkboxIconStyles}
          onClick={() => !label && handleInputChange()}
        >
          {isIndeterminate && <Icon name="16-minus" />}
          <Icon name="16-check" id="checkmark" />
        </tet.div>
      </CheckboxIcon>
    );

    return (
      <tet.div
        {...defaultStyles}
        {...marginProps}
        data-state={state}
        data-testid="checkbox"
      >
        {label ? (
          <tet.label
            htmlFor={checkboxId}
            {...labelStyles}
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
