import clsx from 'clsx';
import React from 'react';

export const variants = {
  primary: 'text-black dark:text-white',
  secondary: 'text-gray-500',
  inverse: 'text-white dark:text-black',
  inverseSecondary: 'text-orange-200',
  danger: 'text-red-500',
};

export const sizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
};

export const weights = {
  bold: 'font-bold',
  semibold: 'font-semibold',
  normal: 'font-normal',
  medium: 'font-medium',
};

const Text = ({
  isLoading,
  text,
  className,
  variant = 'primary',
  size = 'md',
  placeholderCharLength = 15,
  weight = 'normal',
}: {
  className?: string;
  isLoading?: boolean;
  text?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  weight?: keyof typeof weights;
  placeholderCharLength?: number;
}) => (
  <span
    className={clsx(
      className,
      variants[variant],
      sizes[size],
      weights[weight],
      isLoading && '!text-transparent bg-gray-300 rounded animate-pulse'
    )}
  >
    {isLoading ? 'x'.repeat(placeholderCharLength) : text}
  </span>
);

export default React.memo(Text);
