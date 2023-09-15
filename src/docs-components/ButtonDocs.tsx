/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { startCase } from 'lodash';
import { FC, useState, useEffect } from 'react';

import { H1 } from './common/H1';
import { H2 } from './common/H2';
import { H3 } from './common/H3';

import { Button, ButtonProps } from '@/components/Button';
import {
  ButtonAppearance,
  getButtonAppearances,
} from '@/components/Button/types/ButtonAppearance.type';
import {
  ButtonIntent,
  getButtonIntents,
} from '@/components/Button/types/ButtonIntent.type';
import { getButtonSizes } from '@/components/Button/types/ButtonSize.type';
import {
  ButtonVariant,
  variants,
} from '@/components/Button/types/ButtonType.type';
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
        size={size}
        key={size}
        variant={variant}
        {...buttonProps}
      />
    ))}
    <Button label="Click" variant="bare" />
  </tet.div>
);

const ButtonRow = <
  TVariant extends ButtonVariant,
  TAppearance extends ButtonAppearance<TVariant>,
>({
  variant,
  appearance,
  intent,
}: {
  variant: TVariant;
  appearance: TAppearance;
  intent: ButtonIntent<TVariant, TAppearance>;
}) => (
  <tet.div display="flex" gap="500" overflowX="scroll">
    <ButtonSizes
      variant={variant}
      appearance={appearance}
      intent={intent}
      label="Button label"
    />
    <ButtonSizes
      variant={variant}
      appearance={appearance}
      intent={intent}
      label="Button label"
      beforeIcon="20-placeholder"
    />
    <ButtonSizes
      variant={variant}
      appearance={appearance}
      intent={intent}
      label="Button label"
      afterIcon="20-placeholder"
    />
    <ButtonSizes
      variant={variant}
      appearance={appearance}
      intent={intent}
      label="Button label"
      beforeIcon="20-placeholder"
      afterIcon="20-placeholder"
    />
    <ButtonSizes
      variant={variant}
      appearance={appearance}
      intent={intent}
      label="Button label"
      dropdownIndicator
    />
    <ButtonSizes
      variant={variant}
      appearance={appearance}
      intent={intent}
      label="Button label"
      beforeIcon="20-placeholder"
      dropdownIndicator
    />
  </tet.div>
);

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
