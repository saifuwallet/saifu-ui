import clsx from 'clsx';
import React, { ComponentProps, ElementType, FC } from 'react';

import colors from '@/constants/colors';

import Spinner from '@/components/Elements/Spinner';

import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';

const variants = {
  primary: 'hover:bg-gradient-to-bl bg-gradient-to-br from-pink-500 to-orange-500 text-white',
  secondary: 'hover:bg-gradient-to-bl bg-gradient-to-br from-pink-500 to-orange-500 text-white',
  inverse: 'hover:text-orange-500 text-black dark:text-white',
  ghost: 'hover:text-orange-500 text-black dark:text-white',
  danger: `${colors.background.danger} text-white`,
};

const sizes = {
  xs: 'px-3 py-2 text-xs',
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-base',
  xl: 'px-6 py-3.5 text-base',
};

const secondarySizes = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3.5 py-1.5 text-base',
  lg: 'px-4.5 py-2.5 text-base',
  xl: 'px-5.5 py-3 text-base',
};

const spinnerSizes = {
  xs: 'h-4 w-4',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-6 w-6',
};

type IconProps =
  | { startIcon: FC<ComponentProps<'svg'>>; endIcon?: never }
  | { endIcon: FC<ComponentProps<'svg'>>; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type OwnProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
} & IconProps;

export type ButtonProps<E extends React.ElementType> = PolymorphicComponentProps<E, OwnProps>;

const defaultElement = 'button';

const Button: <E extends React.ElementType = typeof defaultElement>(
  props: ButtonProps<E>
) => React.ReactElement | null = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      className,
      startIcon: StartIcon,
      endIcon: EndIcon,
      children,
      ...props
    }: ButtonProps<E>,
    ref: typeof props.ref
  ) => {
    return (
      <Box
        as={defaultElement}
        ref={ref}
        className={clsx(
          'disabled:opacity-70 disabled:cursor-not-allowed rounded-lg focus:outline-none font-medium text-center',
          variants[variant],
          variant === 'secondary' ? 'p-0.5' : sizes[size],
          className
        )}
        {...props}
      >
        <div
          className={clsx(
            'flex justify-center',
            variant === 'secondary' && 'bg-white dark:bg-black text-orange-600 rounded-md',
            variant === 'secondary' && secondarySizes[size]
          )}
        >
          <div className="my-auto">
            {isLoading ? (
              <Spinner className={clsx('mr-2 dark:text-white', spinnerSizes[size])} />
            ) : (
              StartIcon && <StartIcon className="h-4 w-4 mr-2" />
            )}
          </div>
          {children}
          <div className="my-auto">{EndIcon && <EndIcon className="h-4 w-4 ml-2" />}</div>
        </div>
      </Box>
    );
  }
);

export default Button;
