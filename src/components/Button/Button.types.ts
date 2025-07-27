import type { ButtonProps as AriaButtonProps } from 'react-aria-components';

export interface ButtonProps
  extends Pick<
    AriaButtonProps,
    'onPress' | 'isDisabled' | 'aria-label' | 'aria-describedby'
  > {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}
