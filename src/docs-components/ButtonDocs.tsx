import { startCase } from 'lodash';
import { FC, useState, useEffect } from 'react';

import { H1 } from './common/H1';
import { H2 } from './common/H2';
import { H3 } from './common/H3';

import { Button, ButtonProps } from '@/components/Button';
import { tet } from '@/tetrisly';

const LoadingButton = (props: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [isLoading]);
  return (
    <Button
      {...props}
      state={isLoading ? 'loading' : undefined}
      onClick={() => setIsLoading(true)}
    />
  );
};

const getButtonSizes = (variant: ButtonProps['variant']) => {
  if (variant === 'bare') {
    return ['medium', 'large'] as const;
  }
  return ['small', 'medium', 'large'] as const;
};

const ButtonSizes = ({ variant, ...buttonProps }: ButtonProps) => (
  <tet.div
    display="flex"
    flexBasis="150px"
    flexGrow="1"
    flexShrink="0"
    alignItems="flex-start"
    justifyContent="center"
    flexDirection="column"
    gap="400"
    py="500"
  >
    {getButtonSizes(variant).map((size) => (
      <LoadingButton
        key={size}
        {...({ ...buttonProps, size, variant } as ButtonProps)}
      />
    ))}
  </tet.div>
);

type ButtonRowProps = Pick<ButtonProps, 'variant' | 'appearance' | 'intent'>;

const ButtonRow = ({ variant, appearance, intent }: ButtonRowProps) => {
  const baseProps = { variant, appearance, intent } as ButtonProps;
  return (
    <tet.div display="flex" gap="500" overflowX="scroll">
      <ButtonSizes {...baseProps} label="Button label" />
      <ButtonSizes
        {...baseProps}
        label="Button label"
        beforeIcon="20-placeholder"
      />
      <ButtonSizes
        {...({
          ...baseProps,
          label: 'Button label',
          afterIcon: '20-placeholder',
        } as ButtonProps)}
      />
      <ButtonSizes
        {...({
          ...baseProps,
          label: 'Button label',
          beforeIcon: '20-placeholder',
          afterIcon: '20-placeholder',
        } as ButtonProps)}
      />
      <ButtonSizes
        {...({
          ...baseProps,
          label: 'Button label',
          hasDropdownIndicator: true,
        } as ButtonProps)}
      />
      <ButtonSizes
        {...({
          ...baseProps,
          label: 'Button label',
          beforeIcon: '20-placeholder',
          hasDropdownIndicator: true,
        } as ButtonProps)}
      />
    </tet.div>
  );
};

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
      <tet.section key={variant} display="flex" pt="500" flexDirection="column">
        <H1 as="h2">{startCase(variant)}</H1>
        {getButtonAppearances(variant).map((appearance) => (
          <tet.div
            key={appearance}
            display="flex"
            flexDirection="column"
            bg={appearance === 'inverted' ? 'background-inverted' : undefined}
          >
            <H2
              inverted={appearance === 'inverted'}
              as="h3"
              borderBottom="neutral-strong"
            >
              {startCase(appearance)}
            </H2>

            {getButtonIntents(variant, appearance).map((intent) => (
              <tet.div
                key={intent}
                display="flex"
                flexDirection="column"
                px="1000"
                pb="500"
                borderBottomWidth="1px"
                borderBottomColor="border-neutral-subtle"
              >
                <H3 as="h4" inverted={appearance === 'inverted'}>
                  Intent: {startCase(intent)}
                </H3>
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
