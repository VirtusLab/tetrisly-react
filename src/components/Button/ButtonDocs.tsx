import { useEffect, useState } from 'react';

import { Button } from './Button';
import { ButtonProps } from './Button.props';
import { ButtonAppearance } from './types/ButtonAppearance.type';
import { ButtonIntent } from './types/ButtonIntent.type';
import { ButtonSize } from './types/ButtonSize.type';
import { ButtonState } from './types/ButtonState.type';
import { ButtonVariant } from './types/ButtonType.type';

import { TetrislyProvider, tet } from '@/tetrisly';

const ButtonWithLoading = <
  TVariant extends ButtonVariant,
  TAppearance extends ButtonAppearance<TVariant>
>({
  state,
  ...props
}: ButtonProps<TVariant, TAppearance>) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [loading]);
  return (
    <Button
      {...props}
      state={loading ? 'loading' : state}
      onClick={() => setLoading(!loading)}
    />
  );
};

const entries = Object.entries as <T>(o: T) => [keyof T, T[keyof T]][];
type Combinations = {
  [variant in ButtonVariant]: {
    appearance: {
      [appearance in ButtonAppearance<variant>]: ButtonIntent<
        variant,
        appearance
      >[];
    };
    size: ButtonSize<variant>[];
  };
};

const combinations = {
  default: {
    appearance: {
      primary: ['success', 'destructive', 'none'],
      secondary: ['success', 'destructive', 'none'],
      inverted: ['none'],
    },
    size: ['small', 'medium', 'large'],
  },
  ghost: {
    appearance: {
      primary: ['success', 'destructive', 'none'],
      secondary: ['none'],
      inverted: ['none'],
      reverseInverted: ['none'],
    },
    size: ['small', 'medium', 'large'],
  },
  bare: {
    appearance: {
      primary: ['success', 'destructive', 'none'],
      secondary: ['none'],
      inverted: ['none'],
      reverseInverted: ['none'],
    },
    size: ['medium', 'large'],
  },
} satisfies Combinations;

export const ButtonDocs = ({
  state = undefined,
  label = 'Label',
}: {
  state?: ButtonState;
  label: string;
}) => (
  <TetrislyProvider>
    <tet.div>
      {entries(combinations).map(
        ([variant, { appearance, size: sizes }], index) => (
          <tet.div
            key={variant}
            mt={index ? '400' : undefined}
            py="100"
            mb="400"
          >
            <tet.b
              display="block"
              text="medium-300"
              color="content-primary"
              px="400"
              pb="100"
            >
              {variant}
            </tet.b>

            {entries(appearance).map(([appearanceOption, intents]) => (
              <tet.div
                display="flex"
                flexDirection="column"
                key={appearanceOption}
              >
                {intents.map((intent) => (
                  <tet.div
                    my={appearanceOption === 'inverted' ? '200' : undefined}
                    px="400"
                    py={appearanceOption === 'inverted' ? '400' : '200'}
                    borderRadius="large"
                    backgroundColor={
                      appearanceOption === 'inverted'
                        ? 'background-inverted'
                        : undefined
                    }
                    color={
                      appearanceOption === 'inverted'
                        ? 'content-secondary-inverted'
                        : 'content-secondary'
                    }
                    key={intent}
                  >
                    <tet.div
                      display="flex"
                      gap="100"
                      text="medium-100"
                      mb="300"
                      pb="200"
                      borderBottom="1px solid"
                      borderColor={
                        appearanceOption === 'inverted'
                          ? 'border-neutral'
                          : 'border-default'
                      }
                    >
                      <div>
                        Appearance:{' '}
                        <tet.span
                          color={
                            appearanceOption === 'inverted'
                              ? 'content-primary-inverted'
                              : 'content-primary'
                          }
                        >
                          {appearanceOption}
                        </tet.span>
                      </div>
                      ·
                      <div>
                        Intent:{' '}
                        <tet.span
                          color={
                            appearanceOption === 'inverted'
                              ? 'content-primary-inverted'
                              : 'content-primary'
                          }
                        >
                          {intent}
                        </tet.span>
                      </div>
                    </tet.div>
                    <tet.div display="flex" alignItems="center" gap="400">
                      {sizes.map((size) => {
                        const props = {
                          label,
                          variant,
                          state,
                          appearance: appearanceOption,
                          intent,
                          size,
                          key: `${variant}-${appearanceOption}-${intent}-${size}`,
                        };

                        return <ButtonWithLoading {...props} />;
                      })}
                    </tet.div>
                  </tet.div>
                ))}
              </tet.div>
            ))}
          </tet.div>
        )
      )}
    </tet.div>
  </TetrislyProvider>
);
