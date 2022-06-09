import colors from '@/constants/colors';
import clsx from 'clsx';
import * as React from 'react';

import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';

const variants = {
  primary: `${colors.background.highlight} hover:bg-gradient-to-tl text-white`,
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-600',
  ghost: 'text-gray-600 hover:text-orange-500 bg-transparent',
  white: 'text-white dark:text-orange-200',
  outline: 'bg-white text-gray-400 border hover:text-orange-500 rounded-full',
  danger: 'text-red-500 hover:text-red-600 rounded-full',
};

const sizes = {
  xs: 'p-1',
  sm: 'p-1.5',
  md: 'p-2.5',
  lg: 'p-2.5',
  xl: 'p-2.5',
  '2xl': 'p-2.5',
  '3xl': 'p-2.5',
};

const iconSizes = {
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-5 w-5',
  lg: 'h-7 w-7',
  xl: 'h-8 w-8',
  '2xl': 'h-10 w-10',
  '3xl': 'h-12 w-12',
};

const roundings = {
  none: '',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export type OwnProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  rounded?: keyof typeof roundings;
  icon: React.FC<React.ComponentProps<'svg'>>;
};

export type IconButtonProps<E extends React.ElementType> = PolymorphicComponentProps<E, OwnProps>;

const defaultElement = 'button';

const IconButton: <E extends React.ElementType = typeof defaultElement>(
  props: IconButtonProps<E>
) => React.ReactElement | null = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    {
      variant = 'primary',
      size = 'md',
      rounded = 'md',
      icon: Icon,
      className,
      ...props
    }: IconButtonProps<E>,
    ref: typeof props.ref
  ) => {
    return (
      <Box
        as={defaultElement}
        ref={ref}
        className={clsx(
          'inline-block transition transform-gpu ease-in-out outline-none',
          variants[variant],
          sizes[size],
          roundings[rounded],
          className
        )}
        {...props}
      >
        <Icon className={clsx(iconSizes[size])} />
      </Box>
    );
  }
);

export default IconButton;
