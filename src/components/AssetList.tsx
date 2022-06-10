import clsx from 'clsx';
import React from 'react';
import ListCard from './ListCard';

const AssetList = ({ children, className }: { className?: string; children: React.ReactNode }) => {
  return <ListCard className={clsx(className)}>{children}</ListCard>;
};

export default AssetList;
