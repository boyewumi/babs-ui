import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center w-fit rounded font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: [
          'border border-transparent bg-primary-500 text-white shadow-primary-sm',
          'hover:bg-primary-600 hover:shadow-primary',
          'focus-visible:ring-primary-500/20',
          'active:bg-primary-700',
        ],
        secondary: [
          'border border-transparent bg-neutral-100 text-neutral-900 shadow-sm',
          'hover:bg-neutral-200 hover:shadow',
          'focus-visible:ring-neutral-500/20',
        ],
        outline: [
          'border border-neutral-200 bg-transparent text-neutral-900 shadow-xs',
          'hover:bg-neutral-50 hover:border-neutral-300 hover:shadow-sm',
          'focus-visible:ring-neutral-500/20',
        ],
      },
      size: {
        sm: 'h-8 px-3 text-label rounded-sm',
        md: 'h-9 px-4 text-label-lg rounded',
        lg: 'h-10 px-6 text-body-md rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export { buttonVariants };
