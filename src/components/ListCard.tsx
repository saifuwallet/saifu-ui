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
    <Card className={clsx('divide-y dark:divide-zinc-700', className)}>
      <div className="overflow-hidden rounded-lg">{children}</div>
    </Card>
  );
};

export default ListCard;
