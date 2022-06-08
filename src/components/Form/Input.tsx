import clsx from 'clsx';
import * as React from 'react';

import Label from '@/components/Form/Label';
import Text from '@/components/Elements/Text';

const variants = {
  primary: 'border-none rounded-lg shadow-sm',
  transparent: 'border-none bg-transparent',
  gray: 'border-none bg-gray-50',
  danger: 'bg-red-600 text-white hover:bg-red-50 hover:bg-red-700',
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  errorText?: string;
  variant?: keyof typeof variants;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', variant = 'primary', label, errorText, ...props }, ref) => (
    <div className="space-y-2">
      {label && <Label htmlFor={props.id || props.name}>{label}</Label>}
      <input
        ref={ref}
        className={clsx('block w-full p-2.5 focus:ring-0', variants[variant], className)}
        {...props}
      />
      {errorText && (
        <Text variant="danger" size="sm" className="px-2 py-1">
          {errorText}
        </Text>
      )}
    </div>
  )
);

Input.displayName = 'Input';

export default Input;
