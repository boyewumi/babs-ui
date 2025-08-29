import type { TextFieldProps } from 'react-aria-components';

export interface TextAreaProps
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
  variant?: 'standard' | 'filled' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
  className?: string;
}
