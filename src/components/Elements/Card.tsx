import clsx from 'clsx';
import * as React from 'react';

import colors from '@/constants/colors';

import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';

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

type OwnProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  shadow?: keyof typeof shadows;
  rounded?: keyof typeof rounding;
  hover?: boolean;
};

export type CardProps<E extends React.ElementType> = PolymorphicComponentProps<E, OwnProps>;

const defaultElement = 'div';

const Card: <E extends React.ElementType = typeof defaultElement>(
  props: CardProps<E>
) => React.ReactElement | null = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    {
      variant = 'primary',
      size = 'md',
      shadow = 'md',
      hover = false,
      rounded = 'md',
      className,
      ...props
    }: CardProps<E>,
    ref: typeof props.ref
  ) => {
    return (
      <Box
        as={defaultElement}
        ref={ref}
        className={clsx(
          variants[variant],
          sizes[size],
          shadows[shadow],
          rounding[rounded],
          className,
          props.onClick && 'cursor-pointer',
          hover && 'transition ease-in-out duration-200 hover:bg-gray-50 dark:hover:bg-gray-700'
        )}
        {...props}
      />
    );
  }
);

export default Card;
