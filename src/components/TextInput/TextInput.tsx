import { Icon } from '@virtuslab/tetrisly-icons';
import { merge } from 'lodash';
import {
  forwardRef,
  useRef,
  useCallback,
  useMemo,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
} from 'react';

import { TextInputProps } from './TextInput.props';
import { config as defaultConfig } from './TextInput.style';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { extractMarginProps } from '@/services/extractMarginProps';
import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

export const TextInput = forwardRef<
  HTMLInputElement,
  TextInputProps & MarginProps
>(
  (
    {
      type = 'text',
      beforeComponent,
      afterComponent,
      state,
      hasClearButton,
      custom,
      value,
      onChange,
      ...rest
    },
    inputRef,
  ) => {
    const [innerValue, setInnerValue] = useState('');
    const [marginProps, inputProps] = extractMarginProps<
      TextInputProps & MarginProps
    >(rest);

    const config = useMemo(() => merge(custom, defaultConfig), [custom]);
    const {
      innerComponents: {
        input: inputStyles,
        icon: iconStyles,
        text: textStyles,
        clearButton: clearButtonStyles,
      },
      spacing,
      ...defaultStyles
    } = config;

    const containerRef = useRef<HTMLInputElement | null>(null);

    const handleContainerClick: MouseEventHandler = useCallback(
      (e) => {
        if (e.target === containerRef.current) {
          const input = containerRef.current?.querySelector('input');

          if (input) input.focus();
        }
      },
      [containerRef],
    );

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
      (e) => {
        value === undefined ? setInnerValue(e.target.value) : onChange?.(e);
      },
      [onChange, value],
    );

    const handleOnClear: MouseEventHandler<HTMLButtonElement> =
      useCallback(() => {
        value === undefined
          ? setInnerValue('')
          : onChange?.({ target: { value: '' } } as any);
      }, [onChange, value]);

    return (
      <tet.div
        ref={containerRef}
        onClick={handleContainerClick}
        {...defaultStyles}
        pl={!!beforeComponent && '0'}
        pr={!!afterComponent && '0'}
        {...marginProps}
        data-state={state}
        data-testid="text-input"
      >
        {!!beforeComponent && (
          <tet.span {...spacing.beforeComponent[beforeComponent.type]}>
            {beforeComponent.type === 'Icon' && (
              <tet.span {...iconStyles}>
                <Icon {...beforeComponent.props} />
              </tet.span>
            )}
            {beforeComponent.type === 'Prefix' && (
              <tet.span {...textStyles}>{beforeComponent.props.text}</tet.span>
            )}
            {beforeComponent.type === 'Dropdown' && (
              <Button
                size="small"
                variant="ghost"
                label={beforeComponent.props.label}
                dropdownIndicator
              />
            )}
          </tet.span>
        )}
        <tet.input
          {...inputStyles}
          value={value || innerValue}
          onChange={handleOnChange}
          {...inputProps}
          type={type}
          disabled={state === 'disabled'}
          ref={inputRef}
          data-testid="text-input-input"
        />
        {!!hasClearButton && (value || innerValue) && (
          <IconButton
            variant="bare"
            icon="20-close"
            onClick={handleOnClear}
            {...clearButtonStyles}
            data-testid="text-input-clear-button"
          />
        )}
        {!!afterComponent && (
          <tet.span {...spacing.afterComponent[afterComponent.type]}>
            {afterComponent.type === 'Icon' && (
              <tet.span {...iconStyles}>
                <Icon {...afterComponent.props} />
              </tet.span>
            )}
            {afterComponent.type === 'Sufix' && (
              <tet.span {...textStyles}>{afterComponent.props.text}</tet.span>
            )}
            {afterComponent.type === 'Button' && (
              <Button size="small" variant="ghost" label="Label" />
            )}
            {afterComponent.type === 'Dropdown' && (
              <Button
                size="small"
                variant="ghost"
                label={afterComponent.props.label}
                dropdownIndicator
              />
            )}
          </tet.span>
        )}
      </tet.div>
    );
  },
);
