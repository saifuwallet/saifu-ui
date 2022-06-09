import React from 'react';

import clsx from 'clsx';
import { Box as PolymorphicBox, PolymorphicComponentProps } from 'react-polymorphic-box';

export type OwnProps = {
  start?: React.ReactNode;
  hover?: boolean;
  clickable?: boolean;
};

export type BoxProps<E extends React.ElementType> = PolymorphicComponentProps<E, OwnProps>;
const defaultElement = 'div';

const Box: <E extends React.ElementType = typeof defaultElement>(
  props: BoxProps<E>
) => React.ReactElement | null = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    { start, hover, clickable, className, children, ...props }: BoxProps<E>,
    ref: typeof props.ref
  ) => {
    return (
      <PolymorphicBox
        as={defaultElement}
        ref={ref}
        className={clsx(
          'p-4 flex',
          hover &&
            'transition transform-gpu ease-in-out duration-200 hover:bg-gray-50 dark:hover:bg-zinc-700',
          clickable && 'cursor-pointer',
          className
        )}
        {...props}
      >
        <div className="flex-none self-center">{start}</div>
        <div className="grow">{children}</div>
      </PolymorphicBox>
    );
  }
);

export default Box;
