import React from 'react';
import ListCard from './ListCard';
import Text from '@/components/Elements/Text';

const ActivityList = ({ children }: { children: React.ReactNode }) => {
  return <ListCard>{children}</ListCard>;
};

export default ActivityList;
