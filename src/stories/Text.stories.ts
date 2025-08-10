import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '../components/Text/Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible text component with semantic HTML elements, typography variants, font weights, and color options for consistent text styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'label-sm',
        'label',
        'label-md',
        'label-lg',
        'body-xs',
        'body-sm',
        'body',
        'body-md',
        'body-lg',
        'heading-xs',
        'heading-sm',
        'heading-md',
        'heading-lg',
        'heading-xl',
        'heading-2xl',
        'heading-3xl',
        'heading-4xl',
        'display-sm',
        'display-md',
        'display-lg',
        'display-xl',
        'display-2xl',
        'display-3xl',
        'display-4xl',
      ],
      description: 'Typography variant',
    },
    weight: {
      control: { type: 'select' },
      options: ['light', 'normal', 'medium', 'semibold', 'bold', 'extrabold'],
      description: 'Font weight',
    },
    color: {
      control: { type: 'select' },
      options: [
        'primary',
        'primary-600',
        'neutral-900',
        'neutral-800',
        'neutral-700',
        'neutral-600',
        'neutral-500',
        'neutral-400',
        'success',
        'warning',
        'error',
        'info',
        'white',
      ],
      description: 'Text color',
    },
    as: {
      control: { type: 'select' },
      options: ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label'],
      description: 'HTML element to render',
    },
    htmlFor: {
      control: 'text',
      description: 'ID of form element (only when as="label")',
    },
    children: {
      control: 'text',
      description: 'Text content',
    },
  },
  args: {
    children: 'Sample text content',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Label: Story = {
  args: {
    variant: 'label',
    children: 'Default Label',
    as: 'label',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Default body text for regular content and paragraphs.',
  },
};

export const HeadingMedium: Story = {
  args: {
    variant: 'heading-md',
    children: 'Medium Heading',
    as: 'h4',
  },
};

export const DisplayMedium: Story = {
  args: {
    variant: 'display-md',
    children: 'Medium Display',
    as: 'h1',
  },
};

export const BoldWeight: Story = {
  args: {
    variant: 'body-lg',
    weight: 'bold',
    children: 'Bold weight text',
  },
};

export const PrimaryColor: Story = {
  args: {
    variant: 'body-lg',
    color: 'primary',
    children: 'Primary colored text',
  },
};

export const SuccessColor: Story = {
  args: {
    variant: 'body-lg',
    color: 'success',
    children: 'Success colored text',
  },
};

export const ErrorColor: Story = {
  args: {
    variant: 'body-lg',
    color: 'error',
    children: 'Error colored text',
  },
};

export const WarningColor: Story = {
  args: {
    variant: 'body-lg',
    color: 'warning',
    children: 'Warning colored text',
  },
};

// Semantic HTML examples
export const AsSpan: Story = {
  args: {
    as: 'span',
    variant: 'body',
    children: 'This is a span element',
  },
};

// Combined features
export const StyledHeading: Story = {
  args: {
    variant: 'heading-lg',
    weight: 'bold',
    color: 'primary',
    as: 'h2',
    children: 'Styled Primary Heading',
  },
};
