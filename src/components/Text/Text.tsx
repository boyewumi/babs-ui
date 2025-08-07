import { forwardRef, useRef } from 'react';
import type { TextProps } from './Text.types';
import { textVariants } from './Text.variants';
import { mergeRefs } from '../../utils/mergeRefs';

const Text = forwardRef<HTMLElement, TextProps>(
  ({ as: Component = 'p', ...props }, forwardedRef) => {
    const internalRef = useRef<HTMLButtonElement>(null);

    const ref = mergeRefs(internalRef, forwardedRef);

    return (
      <Component
        ref={ref}
        className={textVariants({
          variant: props.variant,
          weight: props.weight,
          color: props.color,
          className: props.className,
        })}
        {...(Component === 'label' &&
          props.htmlFor && { htmlFor: props.htmlFor })}
      >
        {props.children}
      </Component>
    );
  }
);

Text.displayName = 'Text';
export { Text };
