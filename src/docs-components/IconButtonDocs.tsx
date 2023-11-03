import { capitalize, startCase } from 'lodash';
import { ComponentProps } from 'react';

import { SectionHeader } from './common/SectionHeader';
import { useLoading } from './hooks/useLoading';

import { IconButton, IconButtonProps } from '@/components/IconButton';
import { tet } from '@/tetrisly';

const variants = ['default', 'ghost', 'bare'] as const;
const getAppearances = (variant: (typeof variants)[number]) => {
  if (variant === 'default') {
    return ['primary', 'inverted'] as const;
  }
  return ['primary', 'inverted', 'reverseInverted'] as const;
};
const getIntents = (appearance: ReturnType<typeof getAppearances>[number]) => {
  if (appearance === 'primary') {
    return ['none', 'success', 'destructive'] as const;
  }
  return ['none'] as const;
};

const LoadingIconButton = (props: ComponentProps<typeof IconButton>) => {
  const [isLoading, startLoading] = useLoading();
  return (
    <IconButton
      {...props}
      state={isLoading ? 'loading' : undefined}
      onClick={startLoading}
    />
  );
};

export const IconButtonDocs = () => (
  <>
    {variants.map((variant) => (
      <tet.section key={variant}>
        <SectionHeader variant="Hero" as="h2" px="$dimension-1000">
          {capitalize(variant)}
        </SectionHeader>
        <tet.div>
          {getAppearances(variant).map((appearance) => (
            <tet.div
              key={`${variant}${appearance}`}
              bg={
                appearance === 'inverted'
                  ? '$color-background-inverted'
                  : undefined
              }
            >
              <SectionHeader
                inverted={appearance === 'inverted'}
                variant="H1"
                as="h3"
                py="$dimension-500"
                px="$dimension-1000"
              >
                {startCase(appearance)}
              </SectionHeader>
              {getIntents(appearance).map((intent) => {
                const iconButtonProps = {
                  appearance,
                  intent,
                  variant,
                  icon: '20-placeholder',
                } as IconButtonProps;
                return (
                  <tet.div
                    display="grid"
                    gridTemplateColumns="1fr 1fr"
                    px="$dimension-1000"
                    key={`${variant}${appearance}${intent}`}
                  >
                    <tet.div py="$dimension-500">
                      <SectionHeader
                        variant="H2"
                        as="h4"
                        inverted={appearance === 'inverted'}
                        labels={[
                          `Intent: ${capitalize(intent)}`,
                          'Dropdown: false',
                        ]}
                      />
                      <LoadingIconButton
                        mt="$dimension-500"
                        {...iconButtonProps}
                      />
                    </tet.div>
                    <tet.div py="$dimension-500">
                      <SectionHeader
                        variant="H2"
                        as="h4"
                        inverted={appearance === 'inverted'}
                        labels={[
                          `Intent: ${capitalize(intent)}`,
                          'Dropdown: true',
                        ]}
                      />
                      <LoadingIconButton
                        mt="$dimension-500"
                        {...iconButtonProps}
                        hasDropdownIndicator
                      />
                    </tet.div>
                  </tet.div>
                );
              })}
            </tet.div>
          ))}
        </tet.div>
      </tet.section>
    ))}
  </>
);
