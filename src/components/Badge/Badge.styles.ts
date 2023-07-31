import { SystemProps } from '@xstyled/styled-components';

import { fromEntries } from '@/services/fromEntries';
import { Theme } from '@/theme';
import type { BasicAppearance, BasicIntent } from '@/types';
import { basicAppearances } from '@/types/BasicAppearance';
import { basicIntents } from '@/types/BasicIntent';

type Config = {
  appearance: Record<
    BasicAppearance,
    Record<'high' | 'medium' | 'low', SystemProps>
  >;
  intent: Record<BasicIntent, Record<'high' | 'medium' | 'low', SystemProps>>;
  label: SystemProps;
  icon: SystemProps;
};

export const config = {
  appearance: {
    ...fromEntries(
      basicAppearances.map((basicAppearance) => [
        basicAppearance,
        {
          high: {
            color: 'nonSemantic-white-content-primary',
            backgroundColor: `nonSemantic-${basicAppearance}-background-strong`,
          },
          medium: {
            color: `nonSemantic-${basicAppearance}-content-primary`,
            backgroundColor: `nonSemantic-${basicAppearance}-background-muted`,
          },
          low: {
            color: `nonSemantic-${basicAppearance}-content-primary`,
            backgroundColor: `nonSemantic-${basicAppearance}-background-onSubtle`,
          },
        },
      ])
    ),
  },
  intent: {
    ...fromEntries(
      basicIntents.map((basicIntent) => [
        basicIntent,
        {
          high: {
            color: `content-primary${
              basicIntent !== 'warning' ? '-inverted' : ''
            }`,
            backgroundColor: `background-${basicIntent}-strong`,
          },
          medium: {
            color: `content-${
              basicIntent !== 'neutral' ? `${basicIntent}-` : ''
            }primary`,
            backgroundColor: `background-${basicIntent}-muted`,
          },
          low: {
            color: `content-${
              basicIntent !== 'neutral' ? `${basicIntent}-` : ''
            }-primary`,
            backgroundColor: `background-${basicIntent}-onSubtle`,
          },
        },
      ])
    ),
  },
  display: 'flex',
  w: 'fit-content',
  h: 'xSmall',
  borderRadius: 'large',
  flexShrink: 0,
  alignItems: 'center',
  label: {
    padding: 'component-padding-small',
  },
  icon: {
    padding: 'component-padding-xSmall',
  },
  gap: 'component-gap-xSmall',
} as const satisfies Omit<SystemProps<Theme>, 'padding'> & Config;
