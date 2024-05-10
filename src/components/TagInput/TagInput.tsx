import { Props } from '@xstyled/styled-components';
import { Children, forwardRef, isValidElement, PropsWithChildren } from 'react';

import { TagInputProps } from './TagInput.props';
import { useTagInput } from './useTagInput';
import { HelperText } from '../HelperText';
import { Label } from '../Label';
import { Tag } from '../Tag/Tag';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

export const TagInput = forwardRef<
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
      if (isValidElement(child) && child?.type !== TagInputBase.Item) {
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
        {label && <Label {...label} />}

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
        {helperText && (
          <HelperText
            {...helperText}
            intent={shouldRenderAlertIcon ? 'alert' : 'none'}
            hasBeforeIcon={shouldRenderAlertIcon}
          />
        )}
      </tet.div>
    );
  },
);

const TagInputBase = TagInput as Props;
TagInputBase.Item = Tag;
