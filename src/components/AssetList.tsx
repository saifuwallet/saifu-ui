import React from 'react';
import ListCard from './ListCard';
import Text from './Elements/Text';

const AssetList = ({ children }: { children: React.ReactNode }) => {
  return <ListCard>{children}</ListCard>;
};

export default AssetList;
