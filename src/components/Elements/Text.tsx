import clsx from 'clsx';
import React from 'react';

import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';

export const variants = {
  primary: 'text-black dark:text-white',
  secondary: 'text-gray-500',
  'gray-500': 'text-gray-500',
  'gray-400': 'text-gray-400',
  inverse: 'text-white dark:text-black',
  inverseSecondary: 'text-orange-200',
  danger: 'text-red-500',
  success: 'text-green-500',
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
  light: 'font-light',
  thin: 'font-thin',
};

export type OwnProps = {
  isLoading?: boolean;
  text?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  weight?: keyof typeof weights;
  placeholderCharLength?: number;
};

export type TextProps<E extends React.ElementType> = PolymorphicComponentProps<E, OwnProps>;

const defaultElement = 'span';

const Text: <E extends React.ElementType = typeof defaultElement>(
  props: TextProps<E>
) => React.ReactElement | null = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    {
      isLoading,
      text,
      className,
      variant = 'primary',
      size = 'md',
      placeholderCharLength = 15,
      weight = 'normal',
      ...props
    }: TextProps<E>,
    ref: typeof props.ref
  ) => {
    return (
      <Box
        as={defaultElement}
        ref={ref}
        className={clsx(
          className,
          variants[variant],
          sizes[size],
          weights[weight],
          isLoading && '!text-transparent bg-gray-300 rounded animate-pulse'
        )}
        {...props}
      >
        {isLoading ? 'x'.repeat(placeholderCharLength) : text}
      </Box>
    );
  }
);

export default Text;
