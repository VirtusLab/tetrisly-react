import { Icon } from '@virtuslab/tetrisly-icons';
import {
  forwardRef,
  useRef,
  useCallback,
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  ChangeEvent,
  useMemo,
} from 'react';

import { stylesBuilder } from './stylesBuilder';
import { TextInputProps } from './TextInput.props';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

import { extractInputProps } from '@/services';
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
      ...restProps
    },
    inputRef,
  ) => {
    const [innerValue, setInnerValue] = useState('');
    const styles = useMemo(
      () => stylesBuilder(custom, beforeComponent?.type, afterComponent?.type),
      [afterComponent?.type, beforeComponent?.type, custom],
    );
    const [textInputProps, containerProps] = extractInputProps(restProps);

    const containerRef = useRef<HTMLInputElement | null>(null);

    const handleContainerClick: MouseEventHandler = useCallback(
      (e) => {
        if (e.target === containerRef.current) {
          const input = containerRef.current?.querySelector('input');
          input?.focus();
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
        {...styles.container}
        pl={!!beforeComponent && '0'}
        pr={(!!afterComponent || !!hasClearButton) && '0'}
        data-testid="text-input"
        data-state={state}
        tabIndex={0}
        {...containerProps}
      >
        {!!beforeComponent && (
          <tet.span
            {...styles.beforeComponent}
            data-testid="text-input-before-component"
          >
            {beforeComponent.type === 'Icon' && (
              <tet.span {...styles.icon}>
                <Icon {...beforeComponent.props} />
              </tet.span>
            )}
            {beforeComponent.type === 'Prefix' && (
              <tet.span {...styles.text}>{beforeComponent.props.text}</tet.span>
            )}
            {beforeComponent.type === 'Dropdown' && (
              <Button
                size="small"
                variant="ghost"
                label={beforeComponent.props.label}
                hasDropdownIndicator
              />
            )}
            {beforeComponent.type === 'Avatar' && (
              <Avatar {...beforeComponent.props} shape="square" size="xSmall" />
            )}
          </tet.span>
        )}
        <tet.input
          {...styles.input}
          value={value || innerValue}
          onChange={handleOnChange}
          data-testid="text-input-input"
          {...textInputProps}
          type={type}
          disabled={state === 'disabled'}
          ref={inputRef}
        />
        {!!hasClearButton && (value || innerValue) && (
          <IconButton
            variant="bare"
            icon="20-close"
            onClick={handleOnClear}
            {...styles.clearButton}
            data-testid="text-input-clear-button"
          />
        )}
        {!!afterComponent && (
          <tet.span
            {...styles.afterComponent}
            data-testid="text-input-after-component"
          >
            {afterComponent.type === 'Icon' && (
              <tet.span {...styles.icon}>
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
              <tet.span {...styles.text}>{afterComponent.props.text}</tet.span>
            )}
            {afterComponent.type === 'Button' && (
              <Button size="small" variant="ghost" label="Label" />
            )}
            {afterComponent.type === 'Dropdown' && (
              <Button
                size="small"
                variant="ghost"
                label={afterComponent.props.label}
                hasDropdownIndicator
              />
            )}
          </tet.span>
        )}
      </tet.div>
    );
  },
);
