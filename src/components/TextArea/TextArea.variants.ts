import { cva } from 'class-variance-authority';

const textAreaVariants = cva(
  'w-full font-normal transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-neutral-400',
  {
    variants: {
      variant: {
        standard: [
          'border border-neutral-200 bg-white text-neutral-900 shadow-xs',
          'hover:border-neutral-300 hover:shadow-sm',
          'focus-visible:border-primary-500 focus-visible:ring-primary-500/20 focus-visible:shadow-primary-sm focus-visible:ring-2',
          'invalid:border-error-500 invalid:ring-error-500/20',
        ],
        filled: [
          'border border-transparent bg-neutral-100 text-neutral-900 shadow-inner',
          'hover:bg-neutral-200',
          'focus-visible:bg-white focus-visible:ring-2 focus-visible:border-primary-500 focus-visible:ring-primary-500/20 focus-visible:shadow-primary-sm',
          'invalid:bg-error-50 invalid:border-error-500 invalid:ring-error-500/20',
        ],
        underline: [
          'border-0 border-b-2 border-neutral-200 bg-transparent text-neutral-900 shadow-none rounded-none',
          'hover:border-neutral-300',
          'focus-visible:shadow-none',
          'invalid:border-error-500',
        ],
      },
      size: {
        sm: 'min-h-20 px-3 py-2 text-body-sm rounded-sm',
        md: 'min-h-24 px-4 py-2.5 text-body rounded',
        lg: 'min-h-28 px-6 py-3 text-body-md rounded-lg',
      },
      resize: {
        none: 'resize-none',
        vertical: 'resize-y',
        horizontal: 'resize-x',
        both: 'resize',
      },
    },
    defaultVariants: {
      variant: 'standard',
      size: 'md',
      resize: 'vertical',
    },
  }
);

export { textAreaVariants };
