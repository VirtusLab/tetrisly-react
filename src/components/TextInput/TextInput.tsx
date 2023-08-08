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
    {
      type = 'text',
      beforeComponent,
      afterComponent,
      // hasClearButton = false,
      state,
      custom = {},
    },
    inputRef
  ) => {
    const config = merge(custom, defaultConfig);
    const {
      innerComponents: {
        input: inputStyles,
        icon: iconStyles,
        text: textStyles,
      },
      ...defaultStyles
    } = config;
    return (
      <tet.div {...defaultStyles} data-state={state}>
        {beforeComponent?.type === 'Icon' && (
          <Icon {...beforeComponent.props} {...iconStyles} />
        )}
        {beforeComponent?.type === 'Prefix' && (
          <tet.span {...textStyles}>{beforeComponent.props.text}</tet.span>
        )}
        {beforeComponent?.type === 'Dropdown' && (
          <Button variant="ghost" label="Label" dropdownIndicator />
        )}
        <tet.input
          {...inputStyles}
          type={type}
          disabled={state === 'disabled'}
          ref={inputRef}
        />
        {afterComponent?.type === 'Icon' && (
          <Icon {...afterComponent.props} {...iconStyles} />
        )}
        {afterComponent?.type === 'Sufix' && (
          <tet.p {...textStyles}>{afterComponent.props.text}</tet.p>
        )}
        {afterComponent?.type === 'Button' && (
          <Button variant="ghost" label="Label" />
        )}
        {afterComponent?.type === 'Dropdown' && (
          <Button variant="ghost" label="Label" dropdownIndicator />
        )}
        {/* TODO render IconButton with an clear input action if hasClearButton props is passed */}
      </tet.div>
    );
  }
);
