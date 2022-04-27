import clsx from 'clsx';
import React from 'react';

interface ListItemProps<T extends React.ElementType> {
  as?: T;
  children?: React.ReactNode;
  className?: string;
}

export default function ListItem<T extends React.ElementType = 'button'>({
  className,
  as,
  ...props
}: ListItemProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ListItemProps<T>>) {
  const Component = as || 'button';
  return (
    <Component
      className={clsx('flex space-x-2 p-2 hover:bg-gray-200 w-full', className)}
      {...props}
    />
  );
}
