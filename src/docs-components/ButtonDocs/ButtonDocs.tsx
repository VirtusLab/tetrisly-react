import { startCase } from 'lodash';
import type { FC } from 'react';

import { ButtonRow } from './ButtonRow';
import { SectionHeader } from '../common/SectionHeader';

import type { ButtonProps } from '@/components/Button';
import { tet } from '@/tetrisly';

const variants = ['default', 'ghost', 'bare'] as const;

const getButtonAppearances = (variant: ButtonProps['variant']) => {
  if (variant === 'default') {
    return ['primary', 'secondary', 'inverted'] as const;
  }
  return ['primary', 'secondary', 'inverted', 'reverseInverted'] as const;
};

const getButtonIntents = (
  variant: ButtonProps['variant'],
  appearance: ButtonProps['appearance'],
) => {
  if (
    (variant === 'default' && appearance === 'secondary') ||
    appearance === 'primary'
  )
    return ['none', 'success', 'destructive'] as const;
  return ['none'] as const;
};

export const ButtonDocs: FC = () => (
  <>
    {variants.map((variant) => (
      <tet.section
        key={variant}
        display="flex"
        pt="$dimension-500"
        flexDirection="column"
      >
        <SectionHeader variant="Hero" as="h2" px="$dimension-1000">
          {startCase(variant)}
        </SectionHeader>
        {getButtonAppearances(variant).map((appearance) => (
          <tet.div
            key={appearance}
            display="flex"
            flexDirection="column"
            bg={
              appearance === 'inverted'
                ? '$color-background-inverted'
                : undefined
            }
          >
            <SectionHeader
              variant="H2"
              inverted={appearance === 'inverted'}
              as="h3"
              px="$dimension-1000"
              py="$dimension-500"
              borderBottom="$color-neutral-strong"
            >
              {startCase(appearance)}
            </SectionHeader>

            {getButtonIntents(variant, appearance).map((intent) => (
              <tet.div
                key={intent}
                display="flex"
                flexDirection="column"
                px="$dimension-1000"
                pb="$dimension-500"
                borderBottomWidth="1px"
                borderBottomColor="$color-border-neutral-subtle"
              >
                <SectionHeader
                  variant="H3"
                  as="h4"
                  pt="$dimension-500"
                  inverted={appearance === 'inverted'}
                >
                  Intent: {startCase(intent)}
                </SectionHeader>
                <ButtonRow
                  variant={variant}
                  appearance={appearance}
                  intent={intent}
                />
              </tet.div>
            ))}
          </tet.div>
        ))}
      </tet.section>
    ))}
  </>
);
