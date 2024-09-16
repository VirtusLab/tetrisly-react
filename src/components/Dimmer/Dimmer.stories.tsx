import type { Meta, StoryObj } from '@storybook/react';

import { Dimmer } from './Dimmer';
import { Badge } from '../Badge';
import { Card } from '../Card';

import { DimmerDocs } from '@/docs-components/DimmerDocs';
import { TetDocs } from '@/docs-components/TetDocs';
import { tet } from '@/tetrisly';

const meta = {
  title: 'Dimmer',
  component: Dimmer,
  tags: ['autodocs'],
  args: {},
  parameters: {
    backgrounds: {},
    docs: {
      description: {
        component:
          'An overlay that darkens the background content to focus the users attention on another specific element or interaction, such as a Modal or Side Panel.',
      },
      page: () => (
        <TetDocs docs={null}>
          <DimmerDocs />
        </TetDocs>
      ),
    },
  },
} satisfies Meta<typeof Dimmer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCardComponent: Story = {
  render: () => (
    <>
      <Dimmer />
      <tet.div padding="40">
        <Card>
          <tet.div
            display="flex"
            flexDirection="column"
            gap="$space-component-gap-2xLarge"
            minWidth="432px"
          >
            <Badge appearance="blue" emphasis="medium" label="In Progress" />
            <tet.div display="flex" flexDirection="column">
              <tet.span
                color="$color-content-secondary"
                text="$typo-body-small"
              >
                Task:
              </tet.span>
              <tet.span color="$color-content-primary" text="$typo-body-large">
                Creating React components
              </tet.span>
            </tet.div>
            <tet.div display="flex" gap="$space-component-gap-2xLarge">
              <tet.div display="flex" flexDirection="column" flexGrow={1}>
                <tet.span
                  color="$color-content-secondary"
                  text="$typo-body-small"
                >
                  Created
                </tet.span>
                <tet.span
                  color="$color-content-primary"
                  text="$typo-body-medium"
                >
                  Mon, 14 Feb 2023
                </tet.span>
              </tet.div>
              <tet.div display="flex" flexDirection="column" flexGrow={1}>
                <tet.span
                  color="$color-content-secondary"
                  text="$typo-body-small"
                >
                  Last modified
                </tet.span>
                <tet.span
                  color="$color-content-primary"
                  text="$typo-body-medium"
                >
                  Today, 5:23 am
                </tet.span>
              </tet.div>
            </tet.div>
          </tet.div>
        </Card>
      </tet.div>
    </>
  ),
};
