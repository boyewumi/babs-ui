import { cva } from 'class-variance-authority';

const textVariants = cva(
  '', // No base classes needed for text
  {
    variants: {
      variant: {
        'label-sm': 'text-label-sm',
        label: 'text-label',
        'label-md': 'text-label-md',
        'label-lg': 'text-label-lg',
        'body-sm': 'text-body-sm',
        'body-xs': 'text-body-xs',
        body: 'text-body',
        'body-md': 'text-body-md',
        'body-lg': 'text-body-lg',
        'heading-xs': 'text-heading-xs',
        'heading-sm': 'text-heading-sm',
        'heading-md': 'text-heading-md',
        'heading-lg': 'text-heading-lg',
        'heading-xl': 'text-heading-xl',
        'heading-2xl': 'text-heading-2xl',
        'heading-3xl': 'text-heading-3xl',
        'heading-4xl': 'text-heading-4xl',
        'display-sm': 'text-display-sm',
        'display-md': 'text-display-md',
        'display-lg': 'text-display-lg',
        'display-xl': 'text-display-xl',
        'display-2xl': 'text-display-2xl',
        'display-3xl': 'text-display-3xl',
        'display-4xl': 'text-display-4xl',
      },
      weight: {
        light: 'font-light',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
        extrabold: 'font-extrabold',
      },
      color: {
        primary: 'text-primary-500',
        'primary-600': 'text-primary-600',
        'neutral-900': 'text-neutral-900',
        'neutral-800': 'text-neutral-800',
        'neutral-700': 'text-neutral-700',
        'neutral-600': 'text-neutral-600',
        'neutral-500': 'text-neutral-500',
        'neutral-400': 'text-neutral-400',
        success: 'text-success-600',
        warning: 'text-warning-600',
        error: 'text-error-500',
        info: 'text-info-500',
        white: 'text-white',
      },
    },
    defaultVariants: {
      variant: 'body',
      weight: 'normal',
      color: 'neutral-700',
    },
  }
);

export { textVariants };
