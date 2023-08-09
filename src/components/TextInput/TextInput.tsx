import { Icon } from '@virtuslab/tetrisly-icons';
import { merge } from 'lodash';
import { forwardRef } from 'react';

import { TextInputProps } from './TextInput.props';
import { config as defaultConfig } from './TextInput.style';
import { Button } from '../Button';

import { tet } from '@/tetrisly';
import { MarginProps } from '@/types/MarginProps';

export const TextInput = forwardRef<
  HTMLInputElement,
  TextInputProps & MarginProps
>(
  (
    { type = 'text', beforeComponent, afterComponent, state, custom = {} },
    inputRef
  ) => {
    const config = merge(custom, defaultConfig);
    const {
      innerComponents: {
        input: inputStyles,
        icon: iconStyles,
        text: textStyles,
      },
      spacing,
      ...defaultStyles
    } = config;
    return (
      <tet.div
        {...defaultStyles}
        pl={!!beforeComponent && '0'}
        pr={!!afterComponent && '0'}
        data-state={state}
      >
        {!!beforeComponent && (
          <tet.span {...spacing.beforeComponent[beforeComponent.type]}>
            {beforeComponent.type === 'Icon' && (
              <Icon {...beforeComponent.props} {...iconStyles} />
            )}
            {beforeComponent.type === 'Prefix' && (
              <tet.span {...textStyles}>{beforeComponent.props.text}</tet.span>
            )}
            {beforeComponent.type === 'Dropdown' && (
              <Button
                variant="ghost"
                label={beforeComponent.props.label}
                dropdownIndicator
              />
            )}
          </tet.span>
        )}
        <tet.input
          {...inputStyles}
          type={type}
          disabled={state === 'disabled'}
          ref={inputRef}
        />
        {!!afterComponent && (
          <tet.span {...spacing.afterComponent[afterComponent.type]}>
            {afterComponent.type === 'Icon' && (
              <Icon {...afterComponent.props} {...iconStyles} />
            )}
            {afterComponent.type === 'Sufix' && (
              <tet.span {...textStyles}>{afterComponent.props.text}</tet.span>
            )}
            {afterComponent.type === 'Button' && (
              <Button variant="ghost" label="Label" />
            )}
            {afterComponent.type === 'Dropdown' && (
              <Button
                variant="ghost"
                label={afterComponent.props.label}
                dropdownIndicator
              />
            )}
            {/* TODO render IconButton with an clear input action if hasClearButton props is passed */}
          </tet.span>
        )}
      </tet.div>
    );
  }
);
