import { Icon } from '@virtuslab/tetrisly-icons';
import {
  forwardRef,
  useRef,
  useCallback,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  ChangeEvent,
} from 'react';

import { TextInputProps } from './TextInput.props';
import { defaultConfig } from './TextInput.style';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { mergeConfigWithCustom } from '@/services';
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

    const {
      innerComponents: {
        input: inputStyles,
        icon: iconStyles,
        text: textStyles,
        clearButton: clearButtonStyles,
      },
      spacing,
      ...defaultStyles
    } = mergeConfigWithCustom({ defaultConfig, custom });

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
        setInnerValue(e.target.value);
        onChange?.(e);
      },
      [onChange],
    );

    const handleOnClear: MouseEventHandler<HTMLButtonElement> =
      useCallback(() => {
        setInnerValue('');
        onChange?.({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
      }, [onChange]);

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
          <tet.span
            {...spacing.beforeComponent[beforeComponent.type]}
            data-testid="text-input-before-component"
          >
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
          <tet.span
            {...spacing.afterComponent[afterComponent.type]}
            data-testid="text-input-after-component"
          >
            {afterComponent.type === 'Icon' && (
              <tet.span {...iconStyles}>
                <Icon {...afterComponent.props} />
              </tet.span>
            )}
            {afterComponent.type === 'IconButton' && (
              <IconButton
                variant="ghost"
                size="small"
                {...afterComponent.props}
              />
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
