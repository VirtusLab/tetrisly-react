import {
  ChangeEventHandler,
  FocusEvent,
  MouseEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

import { stylesBuilder } from './stylesBuilder';
import { TagInputProps } from './TagInput.props';

import { extractInputProps } from '@/services';

export const useTagInput = ({
  custom,
  onChange,
  defaultValue,
  state,
  isValidationError,
  ...restProps
}: Omit<TagInputProps, 'tags' | 'label' | 'helperText'>) => {
  const isAlert = state === 'alert';
  const [innerValue, setInnerValue] = useState(defaultValue ?? '');

  const isAlertOrError = isAlert || isValidationError;
  const styles = useMemo(
    () => stylesBuilder(custom, isAlertOrError),
    [custom, isAlertOrError],
  );

  const [tagInputProps, containerProps] = extractInputProps(restProps);

  const containerRef = useRef<HTMLInputElement | null>(null);

  const triggerFocusOnInput = (
    e: MouseEvent<HTMLDivElement> | FocusEvent<HTMLDivElement>,
  ) => {
    if (e.target === containerRef.current) {
      const input = containerRef.current?.querySelector('input');
      input?.focus();
    }
  };

  const handleContainerClick = useCallback(triggerFocusOnInput, [containerRef]);

  const handleContainerFocus = useCallback(triggerFocusOnInput, [containerRef]);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setInnerValue(e.target.value);
      onChange?.(e);
    },
    [onChange],
  );

  return {
    innerValue,
    styles,
    tagInputProps,
    containerProps,
    containerRef,
    handleContainerClick,
    handleContainerFocus,
    handleOnChange,
  };
};
