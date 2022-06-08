import clsx from 'clsx';
import * as React from 'react';
import Text from '@/components/Elements/Text';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', ...props }, ref) => (
    <Text
      as="label"
      ref={ref}
      weight="medium"
      size="sm"
      className={clsx('block mb-2 px-2 font-medium text-black dark:text-white', className)}
      {...props}
    />
  )
);

Label.displayName = 'Label';

export default Label;
