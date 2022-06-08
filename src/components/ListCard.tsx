import clsx from 'clsx';
import React from 'react';
import Card from './Elements/Card';

const ListCard = ({
  children,
  header,
  className,
}: {
  className?: string;
  children: React.ReactNode;
  header?: JSX.Element;
}) => {
  return (
    <Card className={clsx('overflow-clip', className)}>
      {header && <div className="hidden lg:block">{header}</div>}
      <div className="divide-y dark:divide-zinc-700">{children}</div>
    </Card>
  );
};

export default ListCard;
