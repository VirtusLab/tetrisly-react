import { Icon } from '@virtuslab/tetrisly-icons';
import {
  Children,
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  isValidElement,
  PropsWithChildren,
} from 'react';

import { TagInputProps } from './TagInput.props';
import { useTagInput } from './useTagInput';
import { Tag } from '../Tag/Tag';
import { TagProps } from '../Tag/Tag.props';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

type Props = ForwardRefExoticComponent<
  PropsWithChildren<TagInputProps & MarginProps>
> & {
  Item: FC<TagProps & MarginProps>;
};

export const TagInput: Props = forwardRef<
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

TagInput.Item = Tag;
// export const TagInput: Props = forwardRef<
//   HTMLInputElement,
//   TagInputProps & MarginProps
// >(
//   (
//     {
//       children,
//       label,
//       custom,
//       helperText,
//       value,
//       defaultValue,
//       state,
//       isValidationError,
//       ...restProps
//     },
//     inputRef,
//   ) => {
//     const {
//       containerRef,
//       handleContainerClick,
//       styles,
//       containerProps,
//       innerValue,
//       handleOnChange,
//       tagInputProps,
//     } = useTagInput({
//       custom,
//       isValidationError,
//       defaultValue,
//       ...restProps,
//     });

//     const shouldRenderAlertIcon = !!isValidationError && !!helperText;

//     Children.map(children, (child) => {
//         if (isValidElement(child) && child?.type !== TagInput.Item) {
//           console.error(
//             'You should use only CheckboxGroup.Item as a child of a CheckboxGroup component.',
//           );
//         }
//       });

//     return (
//       <tet.div
//         ref={containerRef}
//         onClick={handleContainerClick}
//         {...styles.container}
//         data-testid="tag-input"
//         data-state={state}
//         {...containerProps}
//       >
//         {label && <tet.span {...styles.label}>{label}</tet.span>}

//         <tet.div
//           data-testid="tag-input-input-container"
//           {...styles.inputContainer}
//         >
//           {/* add unique key */}
//           {children}
//           {/* {tags?.map((tag) => <Tag key={tag} {...tag} />)} */}
//           <tet.input
//             {...styles.input}
//             data-testid="tag-input-input"
//             value={value || innerValue}
//             onChange={handleOnChange}
//             ref={inputRef}
//             disabled={state === 'disabled'}
//             {...tagInputProps}
//           />
//         </tet.div>
//         <tet.div {...styles.helperText}>
//           {shouldRenderAlertIcon && <Icon name="16-alert-full" />}
//           <span>{helperText}</span>
//         </tet.div>
//       </tet.div>
//     );
//   },
// );
