import { forwardRef } from 'react';
import {
  TextField,
  Label,
  TextArea as AriaTextArea,
  Text,
  FieldError,
} from 'react-aria-components';
import type { TextAreaProps } from './TextArea.types';
import { textAreaVariants } from './TextArea.variants';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const {
      label,
      description,
      variant,
      size,
      resize,
      className,
      ...textFieldProps
    } = props;

    return (
      <TextField {...textFieldProps} className="flex flex-col">
        {label && (
          <Label className="text-label mb-1 font-normal text-neutral-900">
            {label}
          </Label>
        )}
        <AriaTextArea
          ref={ref}
          className={textAreaVariants({
            variant,
            size,
            resize,
            className,
          })}
        />
        {description && (
          <Text slot="description" className="text-body mt-1 text-neutral-500">
            {description}
          </Text>
        )}
        <FieldError className="text-body-xs text-error-500 mt-1" />
      </TextField>
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea };
