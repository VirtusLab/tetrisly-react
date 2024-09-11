import { ChangeEventHandler, FC, useCallback, useId, useMemo } from 'react';

import { stylesBuilder } from './stylesBuilder';
import { ToggleProps } from './Toggle.props';

import { HelperText } from '@/components/HelperText';
import { useIndeterminate } from '@/hooks';
import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

export const Toggle: FC<ToggleProps & MarginProps> = ({
  isChecked = false,
  helperText,
  label,
  state,
  isIndeterminate = false,
  size = 'small',
  custom,
  onChange,
  ...restProps
}) => {
  const styles = useMemo(() => stylesBuilder(size, custom), [custom, size]);
  const toggleId = useId();

  const disabled = state === 'disabled';
  const indeterminate = !isChecked && isIndeterminate;

  const inputRef = useIndeterminate(indeterminate);

  const handleToggle: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (state !== 'disabled') {
        onChange?.(e);
      }
    },
    [onChange, state],
  );

  return (
    <tet.div
      {...styles.container}
      aria-disabled={disabled}
      data-testid="toggle"
      {...restProps}
    >
      <tet.span
        {...styles.labelContainer}
        aria-disabled={disabled}
        data-testid="toggle-label-container"
      >
        <tet.span
          {...styles.toggleOval}
          data-indeterminate={indeterminate ? 'indeterminate' : undefined}
          data-state={isChecked ? 'selected' : undefined}
          aria-disabled={disabled}
          data-testid="toggle-oval"
        >
          <tet.span
            {...styles.slider}
            data-indeterminate={indeterminate ? 'indeterminate' : undefined}
            data-state={isChecked ? 'selected' : undefined}
            data-testid="toggle-slider"
          />
          <tet.input
            {...styles.input}
            type="checkbox"
            role="switch"
            disabled={disabled}
            checked={isChecked}
            data-testid="toggle-input"
            id={toggleId}
            onChange={handleToggle}
            ref={inputRef}
          />
        </tet.span>
        {label ? (
          <tet.label
            {...styles.label}
            aria-disabled={disabled}
            data-testid="toggle-label"
            htmlFor={toggleId}
          >
            {label}
          </tet.label>
        ) : null}
      </tet.span>
      {!!helperText && (
        <HelperText
          custom={styles.helperText}
          {...helperText}
          data-testid="toggle-helper-text"
        />
      )}
    </tet.div>
  );
};
