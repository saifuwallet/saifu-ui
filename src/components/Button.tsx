import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, ElementType, ReactElement } from 'react';

import colors from '../constants/colors';

import Spinner from './Spinner';

const variants = {
  primary: `${colors.background.highlight} text-white`,
  inverse: 'text-gray-500 hover:text-orange-500',
  danger: 'bg-red-600 text-white hover:bg-red-50 hover:bg-red-700',
};

const sizes = {
  xs: 'py-1 px-2 text-xs',
  sm: 'py-2 px-4 text-sm',
  md: 'py-2 px-4 text-md font-medium',
  lg: 'py-2 px-4 text-lg font-semibold',
};

type IconProps =
  | { startIcon: ReactElement; endIcon?: never }
  | { endIcon: ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type ButtonProps<T extends ElementType> = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  text: string;
  as?: T;
  className?: string;
} & IconProps;

function Button<T extends ElementType = 'button'>({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  startIcon,
  endIcon,
  as,
  ...props
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) {
  const Component = as || 'button';
  return (
    <Component
      className={clsx(
        'flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed rounded-md focus:outline-none space-x-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading && <Spinner variant="white" className="text-lg mr-2" />}
      {!isLoading && startIcon}
      <p>{props.text}</p>
      {!isLoading && endIcon}
    </Component>
  );
}

Button.displayName = 'Button';

export default Button;
