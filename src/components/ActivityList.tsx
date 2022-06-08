import React from 'react';
import ListCard from './ListCard';

const ActivityList = ({ children }: { children: React.ReactNode }) => {
  return <ListCard>{children}</ListCard>;
};

export default ActivityList;
