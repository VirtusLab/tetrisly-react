import { merge } from 'lodash';

import { mergeConfigWithCustom } from './mergeConfigWithCustom';

const defaultConfig = {
  p: 'component-padding-medium',
  pl: 'component-padding-2xLarge',
  display: 'flex',
  alignItems: 'center',
  text: 'body-medium',
  intent: {
    none: {
      backgroundColor: 'background-neutral-strong',
      color: 'content-primary-inverted',
    },
    positive: {
      backgroundColor: 'background-positive-strong',
      color: 'content-primary-inverted',
    },
    warning: {
      backgroundColor: 'background-warning-strong',
      color: 'content-primary',
    },
    negative: {
      backgroundColor: 'background-negative-strong',
      color: 'content-primary-inverted',
    },
  },
  innerElements: {
    iconContainer: {
      mr: 'component-gap-small',
    },
    actionContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'component-gap-small',
      ml: 'component-gap-large',
    },
    closeButton: {
      marginLeft: 'auto',
    },
  },
};

describe('mergeConfigWithCustom', () => {
  it('should merge', () => {
    const custom1 = {
      pl: 'component-padding-large',
    };

    const mergedObject = mergeConfigWithCustom({
      defaultConfig,
      custom: custom1,
    });

    expect(mergedObject).toEqual(merge(defaultConfig, custom1));

    const custom2 = {
      pl: 'component-padding-xLarge',
    };

    const mergedObject2 = mergeConfigWithCustom({
      defaultConfig,
      custom: custom2,
    });

    expect(mergedObject2).toEqual(merge(defaultConfig, custom2));

    const customNested = {
      innerElements: {
        actionContainer: {
          ml: 'component-gap-large',
        },
      },
    };

    const mergedObjectNested = mergeConfigWithCustom({
      defaultConfig,
      custom: customNested,
    });

    expect(mergedObjectNested).toEqual(merge(defaultConfig, customNested));
  });
});
