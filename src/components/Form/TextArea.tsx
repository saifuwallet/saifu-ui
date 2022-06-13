import clsx from 'clsx';
import * as React from 'react';

import Text from '@/components/Elements/Text';
import Label from '@/components/Form/Label';

const variants = {
  primary: 'border-none bg-gray-100 dark:bg-zinc-700 text-black dark:text-white',
  white: 'border-none bg-white dark:text-white',
  transparent: 'border-none bg-transparent',
};

export type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  errorText?: string;
  variant?: keyof typeof variants;
};

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = '', variant = 'primary', label, errorText, ...props }, ref) => (
    <div className="space-y-2">
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <textarea
        ref={ref}
        className={clsx('block w-full p-2.5 focus:ring-0 rounded-xl', variants[variant], className)}
        {...props}
      />
      {errorText && (
        <Text as="p" variant="danger" size="sm" className="px-2 py-1">
          {errorText}
        </Text>
      )}
    </div>
  )
);

TextArea.displayName = 'TextArea';

export default TextArea;
