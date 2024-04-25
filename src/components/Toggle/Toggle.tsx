import { FC, MouseEventHandler, useCallback, useId, useMemo } from 'react';

import { stylesBuilder } from './stylesBuilder';
import { ToggleProps } from './Toggle.props';

import { HelperText } from '@/components/HelperText';
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
  ...marginProps
}) => {
  const styles = useMemo(() => stylesBuilder(size, custom), [custom, size]);
  const toggleId = useId();

  const disabled = state === 'disabled';
  const indeterminate = !isChecked && isIndeterminate;

  const handleToggle: MouseEventHandler<HTMLSpanElement> = useCallback(
    (e) => {
      if (state !== 'disabled') {
        onChange?.(e);
      }
    },
    [onChange, state],
  );

  const input = (
    <tet.span
      {...styles.toggleOval}
      data-state={indeterminate ? 'indeterminate' : undefined}
      aria-disabled={disabled}
      aria-selected={isChecked}
      data-testid="toggle-oval"
    >
      <tet.span
        {...styles.slider}
        data-state={indeterminate ? 'indeterminate' : undefined}
        aria-selected={isChecked}
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
      />
    </tet.span>
  );
  return (
    <tet.div
      {...styles.container}
      aria-disabled={disabled}
      data-testid="toggle"
      {...marginProps}
    >
      <tet.span
        {...styles.label}
        aria-disabled={disabled}
        onClick={handleToggle}
        data-testid="toggle-label-container"
      >
        {label ? (
          <>
            {input}
            <tet.label
              {...styles.label}
              aria-disabled={disabled}
              data-testid="toggle-label"
            >
              {label}
            </tet.label>
          </>
        ) : (
          input
        )}
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
