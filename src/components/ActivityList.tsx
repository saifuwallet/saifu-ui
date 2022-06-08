import React from 'react';
import ListCard from './ListCard';

const ActivityList = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <ListCard className={className}>{children}</ListCard>;
};

export default ActivityList;
