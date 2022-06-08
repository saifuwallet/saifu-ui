import React from 'react';
import Card from './Elements/Card';

const ListCard = ({ children, header }: { children: React.ReactNode; header?: JSX.Element }) => {
  return (
    <Card size="noPadding" className="overflow-clip">
      {header && <div className="hidden lg:block">{header}</div>}
      <div className="divide-y">{children}</div>
    </Card>
  );
};

export default ListCard;
