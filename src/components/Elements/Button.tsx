import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, ElementType, ReactElement } from 'react';

import colors from '@/constants/colors';

import Spinner from '@/components/Elements/Spinner';
import Text, { weights } from '@/components/Text';

const variants = {
  primary: `shadow-md ${colors.background.highlight}`,
  inverse: 'hover:text-orange-500',
  danger: `shadow-md ${colors.background.danger}`,
};

const sizes = {
  xs: 'py-1 px-2',
  sm: 'py-2 px-4',
  md: 'py-2 px-4',
  lg: 'py-2 px-4',
};

const textWeights: Record<keyof typeof sizes, keyof typeof weights> = {
  xs: 'normal',
  sm: 'normal',
  md: 'medium',
  lg: 'semibold',
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
      {isLoading ? (
        <Spinner variant={variant === 'inverse' ? 'gray' : 'white'} className="text-lg mr-2" />
      ) : (
        <>
          {startIcon}
          <Text
            weight={textWeights[size]}
            size={size}
            variant={variant === 'inverse' ? 'secondary' : 'inverse'}
            text={props.text}
          />
          {endIcon}
        </>
      )}
    </Component>
  );
}

Button.displayName = 'Button';

export default Button;
