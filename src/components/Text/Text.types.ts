export interface TextProps {
  variant?:
    | 'label-sm'
    | 'label'
    | 'label-md'
    | 'label-lg'
    | 'body-sm'
    | 'body-xs'
    | 'body'
    | 'body-md'
    | 'body-lg'
    | 'heading-xs'
    | 'heading-sm'
    | 'heading-md'
    | 'heading-lg'
    | 'heading-xl'
    | 'heading-2xl'
    | 'heading-3xl'
    | 'heading-4xl'
    | 'display-sm'
    | 'display-md'
    | 'display-lg'
    | 'display-xl'
    | 'display-2xl'
    | 'display-3xl'
    | 'display-4xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?:
    | 'primary'
    | 'primary-600'
    | 'neutral-900'
    | 'neutral-800'
    | 'neutral-700'
    | 'neutral-600'
    | 'neutral-500'
    | 'neutral-400'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'white';
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
  className?: string;
  children: React.ReactNode;
  htmlFor?: string;
}
