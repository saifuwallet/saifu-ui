import React from 'react';
import ListCard from './ListCard';

export type SettingListProps = {
  children: React.ReactNode;
  className?: string;
};

const SettingList = ({ children }: { children: React.ReactNode }) => {
  return <ListCard>{children}</ListCard>;
};

export default SettingList;
