import { forwardRef, useRef } from 'react';
import type { InputProps } from './Input.types';
import { mergeRefs } from '../../utils/mergeRefs';
import { useTextField } from 'react-aria';
import { inputVariants } from './Input.variants';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, forwardedRef) => {
    const internalRef = useRef<HTMLInputElement>(null);

    const ref = mergeRefs(internalRef, forwardedRef);

    const {
      labelProps,
      inputProps,
      descriptionProps,
      errorMessageProps,
      isInvalid,
      validationErrors,
    } = useTextField(props, internalRef);

    return (
      <div className="flex flex-col">
        {props.label && (
          <label
            {...labelProps}
            className="text-label mb-1 font-normal text-neutral-900"
          >
            {props.label}
          </label>
        )}
        <input
          {...inputProps}
          ref={ref}
          className={inputVariants({
            variant: props.variant,
            size: props.size,
            className: props.className,
          })}
        />
        {props.description && (
          <div
            {...descriptionProps}
            className="text-body mt-1 text-neutral-500"
          >
            {props.description}
          </div>
        )}
        {isInvalid && (
          <div
            {...errorMessageProps}
            className="text-body-xs text-error-500 mt-1"
          >
            {validationErrors.join(' ')}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
