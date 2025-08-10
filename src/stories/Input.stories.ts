import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../components/Input/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile input component with multiple variants, sizes, and full form validation support using React Aria.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['standard', 'filled', 'underline'],
      description: 'Input style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Input size',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
      description: 'Input type',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
    isRequired: {
      control: 'boolean',
      description: 'Make the input required',
    },
    label: {
      control: 'text',
      description: 'Input label text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    description: {
      control: 'text',
      description: 'Helper text below the input',
    },
    value: {
      control: 'text',
      description: 'Controlled input value',
    },
    defaultValue: {
      control: 'text',
      description: 'Default input value',
    },
    onChange: { action: 'onChange' },
    onFocus: { action: 'onFocus' },
    onBlur: { action: 'onBlur' },
  },
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {};

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Filled Input',
    placeholder: 'Filled variant',
  },
};

export const Underline: Story = {
  args: {
    variant: 'underline',
    label: 'Underline Input',
    placeholder: 'Underline variant',
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Input',
    placeholder: 'Small size',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Input',
    placeholder: 'Medium size',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Input',
    placeholder: 'Large size',
  },
};

// Type stories
export const Email: Story = {
  args: {
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    label: 'Number',
    placeholder: 'Enter a number',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    isDisabled: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Input',
    placeholder: 'This field is required',
    isRequired: true,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Input with Description',
    placeholder: 'Enter text...',
    description: 'This is a helpful description for the input field.',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Input with Value',
    defaultValue: 'Pre-filled value',
  },
};

export const FullExample: Story = {
  args: {
    variant: 'standard',
    size: 'md',
    type: 'email',
    label: 'Email Address',
    placeholder: 'john@example.com',
    description: "We'll use this to send you updates",
    isRequired: true,
  },
};
