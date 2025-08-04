import type { TextFieldProps } from 'react-aria-components';

export interface InputProps
  extends Pick<
    TextFieldProps,
    | 'value'
    | 'defaultValue'
    | 'onChange'
    | 'onBlur'
    | 'onFocus'
    | 'isDisabled'
    | 'isRequired'
    | 'aria-label'
    | 'aria-describedby'
  > {
  label?: string;
  description?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  variant?: 'standard' | 'filled' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
