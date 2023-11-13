import { Icon } from '@virtuslab/tetrisly-icons';
import { forwardRef } from 'react';

import { TextInputProps } from './TextInput.props';
import { useTextInput } from './useTextInput';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { IconButton } from '../IconButton';

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
      value,
      ...restProps
    },
    inputRef,
  ) => {
    const {
      containerRef,
      handleContainerClick,
      styles,
      containerProps,
      innerValue,
      handleOnChange,
      handleOnClear,
      textInputProps,
    } = useTextInput({
      beforeComponent,
      afterComponent,
      ...restProps,
    });

    return (
      <tet.div
        ref={containerRef}
        onClick={handleContainerClick}
        {...styles.container}
        pl={!!beforeComponent && '0'}
        pr={!!afterComponent && '0'}
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
