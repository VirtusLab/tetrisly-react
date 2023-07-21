import { stylesBuilder } from './stylesBuilder';

import { BaseProps } from '@/types/BaseProps';

describe('stylesBuilder', () => {
  it('should return a styles object when flat config is passed', () => {
    const config = {
      color: 'action-ghost-active',
      backgroundColor: 'action-neutral-active',
      ringColor: 'red-+2',
      ring: '2px',
    } as const satisfies BaseProps;
    const result = {
      color: 'action-ghost-active',
      backgroundColor: 'action-neutral-active',
      ringColor: 'red-+2',
      ring: '2px',
    };
    expect(stylesBuilder({ config, variant: {} })).toEqual({ styles: result });
  });

  it('should return a styles object when nested config with variants is passed', () => {
    const config = {
      color: 'action-ghost-active',
      appearance: {
        primary: {
          backgroundColor: 'action-neutral-active',
        },
        secondary: {
          backgroundColor: 'action-ghost-active',
        },
      },
    } as const;
    const primary = {
      appearance: 'primary',
    } as const;
    const primaryResult = {
      color: 'action-ghost-active',
      backgroundColor: 'action-neutral-active',
    };
    expect(stylesBuilder({ variant: primary, config })).toEqual({
      styles: primaryResult,
    });
    const secondary = {
      appearance: 'secondary',
    } as const;
    const secondaryResult = {
      color: 'action-ghost-active',
      backgroundColor: 'action-ghost-active',
    };
    expect(stylesBuilder({ variant: secondary, config })).toEqual({
      styles: secondaryResult,
    });
  });

  it('should return a styles object when nested config with variants and custom config is passed', () => {
    const config = {
      color: 'action-ghost-active',
      appearance: {
        primary: {
          backgroundColor: 'action-neutral-active',
        },
        secondary: {
          backgroundColor: 'red-+2',
        },
      },
    } as const;
    const custom = {
      appearance: {
        primary: {
          color: 'blue-+2',
        },
      },
    } as const;
    const primary = {
      appearance: 'primary',
    } as const;
    const primaryResult = {
      color: 'blue-+2',
      backgroundColor: 'action-neutral-active',
    };
    expect(stylesBuilder({ variant: primary, config, custom })).toEqual({
      styles: primaryResult,
    });

    const secondary = {
      appearance: 'secondary',
    } as const;
    const secondaryResult = {
      color: 'action-ghost-active',
      backgroundColor: 'red-+2',
    };
    expect(stylesBuilder({ variant: secondary, config, custom })).toEqual({
      styles: secondaryResult,
    });
  });
});
