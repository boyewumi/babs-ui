import type { CheckboxProps as RACCheckboxProps } from 'react-aria-components';

export interface CheckboxProps
  extends Omit<RACCheckboxProps, 'children' | 'className'> {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
