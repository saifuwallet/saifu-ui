import clsx from 'clsx';
import * as React from 'react';

import Label from '@/components/Form/Label';
import Text from '@/components/Elements/Text';

const variants = {
  primary: 'border-none bg-gray-100 dark:bg-zinc-700 text-black dark:text-white',
  white: 'border-none bg-white dark:text-white',
  transparent: 'border-none bg-transparent',
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
        className={clsx(
          'block w-full p-2.5 focus:ring-0 outline-none rounded-xl',
          variants[variant],
          className
        )}
        {...props}
      />
      {errorText && (
        <Text as="p" variant="danger" size="sm" className="px-2">
          {errorText}
        </Text>
      )}
    </div>
  )
);

Input.displayName = 'Input';

export default Input;
