import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../components/TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile textarea component with multiple variants, sizes, and full form validation support using React Aria.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled TextArea',
    placeholder: 'Filled variant',
  },
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    label: 'Underline TextArea',
    placeholder: 'Underline variant',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small TextArea',
    placeholder: 'Small size',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large TextArea',
    placeholder: 'Large size',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled TextArea',
    placeholder: 'This textarea is disabled',
    isDisabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required TextArea',
    placeholder: 'This field is required',
    isRequired: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'TextArea with Description',
    placeholder: 'Enter text...',
    description: 'This is a helpful description for the textarea field.',
  },
};
