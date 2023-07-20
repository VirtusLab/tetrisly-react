import { describe } from 'vitest';

import { stylesBuilder } from './stylesBuilder';

describe('stylesBuilder', () => {
  it('should return correct color for different appearance', () => {
    const propsRed = { appearance: 'red' } as const;
    const propsGreen = { appearance: 'green' } as const;
    const propsOrange = { appearance: 'orange' } as const;
    const propsStroked = { appearance: 'red', stroked: true } as const;

    const resultRed = stylesBuilder(propsRed);
    const resultGreen = stylesBuilder(propsGreen);
    const resultOrange = stylesBuilder(propsOrange);
    const resultStroked = stylesBuilder(propsStroked);

    expect(resultRed).toEqual(
      expect.objectContaining({
        backgroundColor: 'nonSemantic-red-background-strong',
      })
    );

    expect(resultGreen).toEqual(
      expect.objectContaining({
        backgroundColor: 'nonSemantic-green-background-strong',
      })
    );

    expect(resultOrange).toEqual(
      expect.objectContaining({
        backgroundColor: 'nonSemantic-orange-background-strong',
      })
    );

    expect(resultStroked).toEqual(
      expect.objectContaining({
        ring: 'medium',
        ringColor: 'border-inverted',
      })
    );
  });
});
