import { forwardRef, useRef } from 'react';
import type { ButtonProps } from './Button.types';
import { useButton } from 'react-aria';
import { mergeRefs } from '../../utils/mergeRefs';
import { buttonVariants } from './Button.variants';
import { Link } from 'react-aria-components';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const internalRef = useRef<HTMLButtonElement>(null);

    const ref = mergeRefs(internalRef, forwardedRef);

    const { buttonProps } = useButton(props, internalRef);

    if (props.href) {
      return (
        <Link href={props.href} target={props.target}>
          <button
            {...buttonProps}
            ref={ref}
            className={buttonVariants({
              variant: props.variant,
              size: props.size,
              className: props.className,
            })}
          >
            {props.children}
          </button>
        </Link>
      );
    }

    return (
      <button
        {...buttonProps}
        ref={ref}
        className={buttonVariants({
          variant: props.variant,
          size: props.size,
          className: props.className,
        })}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
