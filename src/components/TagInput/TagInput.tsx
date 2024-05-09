import { Icon } from '@virtuslab/tetrisly-icons';
import { Props } from '@xstyled/styled-components';
import { Children, forwardRef, isValidElement, PropsWithChildren } from 'react';

import { TagInputProps } from './TagInput.props';
import { useTagInput } from './useTagInput';
import { Tag } from '../Tag/Tag';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

const TagInputBase = forwardRef<
  HTMLInputElement,
  PropsWithChildren<TagInputProps & MarginProps>
>(
  (
    {
      children,
      label,
      custom,
      helperText,
      value,
      defaultValue,
      state,
      isValidationError,
      onChange,
      ...restProps
    },
    inputRef,
  ) => {
    const isAlert = state === 'alert';
    const shouldRenderAlertIcon =
      (!!isValidationError || isAlert) && !!helperText;

    const {
      containerRef,
      handleContainerClick,
      styles,
      containerProps,
      innerValue,
      handleOnChange,
      tagInputProps,
    } = useTagInput({
      custom,
      isValidationError,
      state,
      defaultValue,
      ...restProps,
    });

    Children.forEach(children, (child) => {
      if (isValidElement(child) && child?.type !== TagInput.Item) {
        console.error(
          'You should use only TagInput.Item as a child of a TagInput component.',
        );
      }
    });

    return (
      <tet.div
        ref={containerRef}
        onClick={handleContainerClick}
        {...styles.container}
        data-testid="tag-input"
        data-state={state}
        {...containerProps}
      >
        {label && <tet.span {...styles.label}>{label}</tet.span>}

        <tet.div
          data-testid="tag-input-input-container"
          {...styles.inputContainer}
        >
          {children}
          <tet.input
            {...styles.input}
            data-testid="tag-input-input"
            type="text"
            value={value || innerValue}
            onChange={handleOnChange}
            disabled={state === 'disabled'}
            ref={inputRef}
            {...tagInputProps}
          />
        </tet.div>
        <tet.div {...styles.helperText}>
          {shouldRenderAlertIcon && <Icon name="16-alert-full" />}
          <span>{helperText}</span>
        </tet.div>
      </tet.div>
    );
  },
);

export const TagInput = TagInputBase as Props;
TagInput.Item = Tag;
