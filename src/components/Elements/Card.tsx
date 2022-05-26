import clsx from 'clsx';
import * as React from 'react';

import colors from '@/constants/colors';

import Spinner from '@/components/Elements/Spinner';

const variants = {
  primary: 'bg-white dark:bg-gray-800',
  highlight: `${colors.background.highlight} text-white`,
};

const sizes = {
  noPadding: 'p-0',
  xs: 'p-1',
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
};

const shadows = {
  none: '',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
};

const rounding = {
  none: '',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
};

export interface CardProps<T extends React.ElementType> {
  isLoading?: boolean;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  shadow?: keyof typeof shadows;
  rounded?: keyof typeof rounding;
  as?: T;
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
}

function Card<T extends React.ElementType = 'div'>({
  isLoading = false,
  variant = 'primary',
  size = 'md',
  shadow = 'md',
  hover = false,
  rounded = 'md',
  as,
  children,
  className,
  ...props
}: CardProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof CardProps<T>>) {
  const Component = as || 'div';
  return (
    <Component
      className={clsx(
        'w-full',
        variants[variant],
        sizes[size],
        shadows[shadow],
        rounding[rounded],
        className,
        props.onClick && 'cursor-pointer',
        hover && 'transition ease-in-out duration-200 hover:bg-gray-50 dark:hover:bg-gray-700'
      )}
      {...props}
    >
      {isLoading && <Spinner />}
      {children}
    </Component>
  );
}

export default Card;
