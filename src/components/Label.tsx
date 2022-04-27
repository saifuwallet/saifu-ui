/* eslint-disable jsx-a11y/label-has-associated-control */
import clsx from 'clsx';
import * as React from 'react';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', ...props }, ref) => (
    <label
      ref={ref}
      className={clsx('block mb-2 mt-4 text-sm font-medium text-gray-900', className)}
      {...props}
    />
  )
);

Label.displayName = 'Label';

export default Label;
