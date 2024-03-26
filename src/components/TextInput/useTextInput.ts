import {
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
  defaultValue,
  ...restProps
}: Omit<TextInputProps, 'type' | 'state' | 'value' | 'hasClearButton'>) => {
  const [innerValue, setInnerValue] = useState(defaultValue ?? '');
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

  const handleOnClear: MouseEventHandler<HTMLButtonElement> = () => {
    setInnerValue('');

    const input = containerRef.current?.querySelector('input');

    if (!input) return;

    const valueSetter = Object.getOwnPropertyDescriptor(
      input.constructor.prototype,
      'value',
    )?.set;

    const prototype = Object.getPrototypeOf(input);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(
      prototype,
      'value',
    )?.set;

    if (valueSetter && valueSetter !== prototypeValueSetter) {
      prototypeValueSetter?.call(input, '');
    } else {
      valueSetter?.call(input, '');
    }

    input.dispatchEvent(new Event('input', { bubbles: true }));
  };

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
