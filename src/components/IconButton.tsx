import clsx from 'clsx';
import * as React from 'react';

const variants = {
  primary: 'text-gray-500 hover:text-orange-500 rounded-full',
  white: 'text-white dark:text-orange-200',
  outline: 'bg-white text-gray-400 border hover:text-orange-500 rounded-full',
  danger: 'text-red-500 hover:text-red-600 rounded-full',
};

const sizes = {
  xs: '',
  sm: 'p-1',
  md: 'p-2',
  lg: 'py-3 px-8 text-lg',
};

export interface IconButtonProps<T extends React.ElementType> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  icon: React.ReactElement;
  type?: 'button' | 'submit' | 'reset';
  as?: T;
}

export default function IconButton<T extends React.ElementType = 'button'>({
  variant = 'primary',
  size = 'md',
  icon,
  as,
  className,
  ...props
}: IconButtonProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof IconButtonProps<T>>) {
  const Component = as || 'button';
  return (
    <Component
      className={clsx(
        'font-medium text-sm text-center inline-flex items-center',
        'transition ease-in-out',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {icon}
    </Component>
  );
}
