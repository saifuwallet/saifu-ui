import React from 'react';
import Card from './Elements/Card';
import Text from './Text';

const AssetList = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="divide-y" size="noPadding">
      <Header />
      {children}
    </Card>
  );
};

const Header = () => (
  <div className="hidden p-3 lg:grid lg:grid-cols-9 gap-x-2 transition-all ease-in-out items-center duration-200">
    <div className="col-start-2 col-span-2 row-span-2">
      <Text variant="secondary" weight="semibold" text="Asset" />
    </div>
    <div className="col-span-2 text-right">
      <Text variant="secondary" weight="semibold" text="Price" />
    </div>
    <div className="col-span-2 text-right">
      <Text variant="secondary" weight="semibold" text="Balance" />
    </div>
    <div className="col-span-4 lg:col-span-2 text-right">
      <Text variant="secondary" weight="semibold" text="Amount" />
    </div>
  </div>
);

export default AssetList;
