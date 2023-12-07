import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  FocusEvent,
  MouseEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

import { stylesBuilder } from './stylesBuilder';
import { TextInputProps } from './TextInput.props';

import { extractInputProps } from '@/services';

export const useTextInput = ({
  custom,
  beforeComponent,
  afterComponent,
  onChange,
  ...restProps
}: Omit<TextInputProps, 'type' | 'state' | 'value' | 'hasClearButton'>) => {
  const [innerValue, setInnerValue] = useState('');
  const styles = useMemo(
    () => stylesBuilder(custom, beforeComponent?.type, afterComponent?.type),
    [afterComponent?.type, beforeComponent?.type, custom],
  );
  const [textInputProps, containerProps] = extractInputProps(restProps);

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

  const handleOnClear: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      setInnerValue('');
      onChange?.({
        target: { value: '' },
      } as ChangeEvent<HTMLInputElement>);
    }, [onChange]);
  return {
    innerValue,
    styles,
    textInputProps,
    containerProps,
    containerRef,
    handleContainerClick,
    handleContainerFocus,
    handleOnChange,
    handleOnClear,
  };
};
