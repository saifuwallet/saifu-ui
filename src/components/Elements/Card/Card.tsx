import clsx from 'clsx';
import * as React from 'react';

import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';

const variants = {
  primary: 'drop-shadow-xl bg-white dark:bg-zinc-800',
  flat: 'bg-gray-100 dark:bg-zinc-700',
  bordered: 'bg-white dark:bg-zinc-800 border dark:border-zinc-600',
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
  rounded?: keyof typeof rounding;
  hover?: boolean;
};

export type CardProps<E extends React.ElementType> = PolymorphicComponentProps<E, OwnProps>;

const defaultElement = 'div';

const Card: <E extends React.ElementType = typeof defaultElement>(
  props: CardProps<E>
) => React.ReactElement | null = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    { variant = 'primary', hover = false, rounded = 'lg', className, ...props }: CardProps<E>,
    ref: typeof props.ref
  ) => {
    return (
      <Box
        as={defaultElement}
        ref={ref}
        className={clsx(
          'dark:text-white',
          variants[variant],
          rounding[rounded],
          props.onClick && 'cursor-pointer',
          hover &&
            'transition transform-gpu ease-in-out duration-200 hover:bg-gray-50 dark:hover:bg-zinc-700',
          className
        )}
        {...props}
      />
    );
  }
);

export default Card;
