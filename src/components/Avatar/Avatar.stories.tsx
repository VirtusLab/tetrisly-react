import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta = {
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
