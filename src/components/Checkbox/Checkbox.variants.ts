import { cva } from 'class-variance-authority';

const checkboxVariants = cva(
  [
    'relative inline-flex items-center justify-center flex-shrink-0',
    'border-2 bg-white transition-all duration-200 ease-in-out',
    'group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-offset-2',
    'group-data-[disabled]:opacity-50',
    'group-hover:shadow-sm',
    'border-neutral-300 group-hover:border-neutral-400',
    'group-data-[selected]:border-primary-500 group-data-[selected]:bg-primary-500',
    'group-data-[selected]:group-hover:border-primary-600 group-data-[selected]:group-hover:bg-primary-600',
    'group-data-[focus-visible]:ring-primary-500/20',
  ],
  {
    variants: {
      size: {
        sm: 'w-4 h-4 rounded-xs',
        md: 'w-5 h-5 rounded-sm',
        lg: 'w-6 h-6 rounded',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export { checkboxVariants };
