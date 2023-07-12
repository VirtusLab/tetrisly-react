import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ButtonAppearance } from './types/ButtonAppearance.type';
import { ButtonIntent } from './types/ButtonIntent.type';
import { ButtonSize } from './types/ButtonSize.type';
import { ButtonVariant } from './types/ButtonType.type';
import { tet } from '../../tetrisly/tetrisly';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    label: 'Button label',
  },
  argTypes: {
    state: {
      options: [undefined, 'disabled', 'loading', 'selected'],
      defaultValue: undefined,
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'inverted', 'reverseInverted'],
      defaultValue: 'primary',
      control: { type: 'radio' },
    },
  },
};

export const DefaultLoading: Story = {
  ...Default,
  args: {
    state: 'loading',
  },
};

export const DefaultDisabled: Story = {
  ...Default,
  args: {
    state: 'disabled',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'inverted', 'reverseInverted'],
      defaultValue: 'primary',
      control: { type: 'radio' },
    },
  },
};

export const GhostLoading: Story = {
  ...Ghost,
  args: {
    state: 'loading',
  },
};

export const GhostDisabled: Story = {
  ...Ghost,
  args: {
    state: 'disabled',
  },
};

export const Bare: Story = {
  args: {
    variant: 'bare',
  },
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'inverted', 'reverseInverted'],
      defaultValue: 'primary',
      control: { type: 'radio' },
    },
    size: {
      options: ['medium', 'large'],
      defaultValue: 'medium',
      control: { type: 'radio' },
    },
  },
};

export const BareLoading: Story = {
  ...Bare,
  args: {
    state: 'loading',
  },
};

export const BareDisabled: Story = {
  ...Bare,
  args: {
    state: 'disabled',
  },
};

const controlDisabled = {
  table: {
    disable: true,
  },
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

export const AllOptions: Story = {
  argTypes: {
    appearance: controlDisabled,
    intent: controlDisabled,
    size: controlDisabled,
  },
  render: ({ state, label }) => (
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

                        return <Button {...props} />;
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
  ),
};
