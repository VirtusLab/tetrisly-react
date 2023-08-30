import { SystemProps } from '@xstyled/styled-components';

import { fromEntries } from '@/services/fromEntries';
import type { Appearance, BasicIntent } from '@/types';
import { appearances } from '@/types/Appearance';
import { BaseProps } from '@/types/BaseProps';
import { basicIntents } from '@/types/BasicIntent';

export type BadgeConfig = {
  appearance: Record<
    Appearance,
    Record<'high' | 'medium' | 'low', SystemProps>
  >;
  intent: Record<BasicIntent, Record<'high' | 'medium' | 'low', SystemProps>>;
  label: SystemProps;
  icon: SystemProps;
} & BaseProps;

export const config = {
  appearance: {
    ...fromEntries(
      appearances.map((basicAppearance) => [
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
      ]),
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
            }` as SystemProps['color'],
            backgroundColor: `background-${basicIntent}-strong`,
          },
          medium: {
            color: `content-${
              basicIntent !== 'neutral' ? `${basicIntent}-` : ''
            }primary` as SystemProps['color'],
            backgroundColor: `background-${basicIntent}-muted`,
          },
          low: {
            color: `content-${
              basicIntent !== 'neutral' ? `${basicIntent}-` : ''
            }-primary` as SystemProps['color'],
            backgroundColor: `background-${basicIntent}-onSubtle`,
          },
        },
      ]),
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
} satisfies BadgeConfig;
