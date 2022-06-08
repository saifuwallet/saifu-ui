import React from 'react';

import clsx from 'clsx';

export type BoxProps = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  startIcon?: JSX.Element;
};

const Box = ({ className, startIcon, onClick, children }: BoxProps) => {
  return (
    <div
      className={clsx(
        'p-3 flex transition-all ease-in-out duration-200 hover:bg-gray-50 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <div className="flex-none self-center">{startIcon}</div>
      <div className="grow">{children}</div>
    </div>
  );
};

Box.displayName = 'Box';

export default Box;
