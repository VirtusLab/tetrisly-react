import { describe } from 'vitest';

import { stylesBuilder } from './stylesBuilder';

describe('stylesBuilder', () => {
  it('should return correct color for default variant', () => {
    const props = {
      variant: 'default',
      appearance: 'primary',
      intent: 'none',
      size: 'medium',
    } as const;

    const result = stylesBuilder(props);

    expect(result).toEqual({
      container: {
        alignItems: 'center',
        backgroundColor: {
          _: '$color-action-primary-normal',
          active: '$color-action-primary-active',
          hover: '$color-action-primary-hover',
          loading: '$color-action-primary-loading',
          selected: '$color-action-primary-selected',
        },
        borderRadius: '$border-radius-large',
        ring: 'unset',
        boxShadow: '$elevation-bottom-100',
        color: '$color-action-inverted-normal',
        display: 'inline-flex',
        gap: '$space-component-gap-small',
        justifyContent: 'center',
        opacity: {
          disabled: '$opacity-disabled',
        },
        outline: {
          focus: 'solid',
        },
        outlineColor: {
          focus: '$color-interaction-focus-default',
        },
        outlineOffset: 1,
        outlineWidth: {
          focus: '$border-width-focus',
        },
        pointerEvents: {
          disabled: 'none',
          loading: 'none',
        },
        px: '$space-component-padding-large',
        h: '$size-medium',

        text: '$typo-body-medium',
        textAlign: 'center',
        transition: true,
        transitionDuration: 200,
        w: 'auto',
        whiteSpace: 'nowrap',
      },
      loader: {
        appearance: 'white',
      },
    });
  });
});
