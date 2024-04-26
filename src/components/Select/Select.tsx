import { Icon } from '@virtuslab/tetrisly-icons';
import type { FC } from 'react';

import type { SelectProps } from './Select.props';
import { defaultConfig } from './Select.styles';
import { Avatar } from '../Avatar';
import { IconButton } from '../IconButton';
import type { TextInputProps } from '../TextInput';
import { useTextInput } from '../TextInput/useTextInput';

import { mergeConfigWithCustom } from '@/services/mergeConfigWithCustom/mergeConfigWithCustom';
import { tet } from '@/tetrisly';
import type { MarginProps } from '@/types';

const DROPDOWN_INDICATOR_COMPONENT = {
  type: 'IconButton',
  props: {
    icon: '20-chevron-down-small',
  },
} satisfies TextInputProps['afterComponent'];

export const Select: FC<SelectProps & MarginProps> = ({
  state,
  beforeComponent,
  hasClearButton,
  value,
  custom: customProps,
  ...props
}) => {
  const afterComponent = DROPDOWN_INDICATOR_COMPONENT;

  const custom = mergeConfigWithCustom({ defaultConfig, custom: customProps });

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
    custom,
    ...props,
  });

  return (
    <tet.div
      ref={containerRef}
      onClick={handleContainerClick}
      {...styles.container}
      pl={!!beforeComponent && '0'}
      pr="0"
      data-testid="select"
      data-state={state}
      tabIndex={0}
      {...containerProps}
    >
      {!!beforeComponent && (
        <tet.span
          {...styles.beforeComponent}
          data-testid="select-before-component"
        >
          {beforeComponent.type === 'Icon' && (
            <tet.span {...styles.icon}>
              <Icon {...beforeComponent.props} />
            </tet.span>
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
        data-testid="select-input"
        {...textInputProps}
        disabled={state === 'disabled'}
      />
      {!!hasClearButton && (value || innerValue) && (
        <IconButton
          variant="bare"
          icon="20-close"
          size="medium"
          onClick={handleOnClear}
          {...styles.clearButton}
          data-testid="select-clear-button"
        />
      )}
      <tet.span {...styles.afterComponent} data-testid="select-after-component">
        <IconButton variant="bare" size="medium" {...afterComponent.props} />
      </tet.span>
    </tet.div>
  );
};
