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
    <Card className={className}>
      <div className="rounded-lg overflow-hidden">{children}</div>
    </Card>
  );
};

export default ListCard;
