import React from 'react';
import ListCard from './ListCard';
import Text from './Elements/Text';

const AssetList = ({ children }: { children: React.ReactNode }) => {
  return <ListCard header={<Header />}>{children}</ListCard>;
};

const Header = () => (
  <div className="p-3 grid lg:grid-cols-9 gap-x-2 items-center border-b-2 border-gray-100">
    <div className="col-start-2 col-span-2 row-span-2">
      <Text size="sm" variant="gray-500" text="Asset" />
    </div>
    <div className="col-span-2 text-right">
      <Text size="sm" variant="gray-500" text="Price" />
    </div>
    <div className="col-span-2 text-right">
      <Text size="sm" variant="gray-500" text="Amount" />
    </div>
    <div className="col-span-4 lg:col-span-2 text-right">
      <Text size="sm" variant="gray-500" text="Balance" />
    </div>
  </div>
);

export default AssetList;
