import clsx from 'clsx';
import * as React from 'react';

import Label from './Label';

const variants = {
  primary: 'border-none rounded-lg shadow-sm',
  transparent: 'border-none bg-transparent',
  gray: 'border-none bg-gray-50',
  danger: 'bg-red-600 text-white hover:bg-red-50 hover:bg-red-700',
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
        className={clsx('block w-full p-2.5 focus:ring-0', variants[variant], className)}
        {...props}
      />
      {errorText && <p className="text-red-500 text-xs px-2 py-1">{errorText}</p>}
    </div>
  )
);

TextArea.displayName = 'TextArea';

export default TextArea;
