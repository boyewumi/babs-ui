import { Checkbox as RACCheckbox } from 'react-aria-components';
import { checkboxVariants } from './Checkbox.variants';
import React from 'react';
import type { CheckboxProps } from './Checkbox.types';

const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  ({ children, size = 'md', className, ...props }, ref) => {
    return (
      <RACCheckbox
        {...props}
        ref={ref}
        className={`group relative flex cursor-pointer items-center gap-3 ${className || ''}`}
      >
        {({ isSelected, isIndeterminate, isDisabled, isInvalid }) => (
          <>
            <div className={checkboxVariants({ size })}>
              {isIndeterminate ? (
                <IndeterminateIcon size={size} />
              ) : isSelected ? (
                <CheckmarkIcon size={size} />
              ) : null}
            </div>
            {children && (
              <span
                className={`font-medium transition-colors duration-200 select-none ${size === 'sm' ? 'text-label-sm' : size === 'lg' ? 'text-label-lg' : 'text-label'} ${
                  isDisabled
                    ? 'text-neutral-400'
                    : isInvalid
                      ? 'text-error-700 group-hover:text-error-800'
                      : 'text-neutral-900 group-hover:text-neutral-700'
                } `}
              >
                {children}
              </span>
            )}
          </>
        )}
      </RACCheckbox>
    );
  }
);

const CheckmarkIcon = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  const iconSize =
    size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5';

  return (
    <svg
      viewBox="0 0 18 18"
      className={`${iconSize} text-white transition-all duration-200`}
      aria-hidden="true"
      style={{
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 3,
        strokeDasharray: '22px',
        strokeDashoffset: '44px',
      }}
    >
      <polyline points="1 9 7 14 15 4" />
    </svg>
  );
};

const IndeterminateIcon = ({ size }: { size: 'sm' | 'md' | 'lg' }) => {
  const iconSize =
    size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5';

  return (
    <svg
      viewBox="0 0 18 18"
      className={`${iconSize} text-white`}
      aria-hidden="true"
    >
      <rect x="4" y="8" width="10" height="2" fill="currentColor" />
    </svg>
  );
};

Checkbox.displayName = 'Checkbox';

export { Checkbox };
