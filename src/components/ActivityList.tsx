import React from 'react';
import ListCard from './ListCard';
import Text from '@/components/Elements/Text';

const ActivityList = ({ children }: { children: React.ReactNode }) => {
  return <ListCard header={<Header />}>{children}</ListCard>;
};

const Header = () => (
  <div className="hidden p-3 lg:grid lg:grid-cols-9 gap-x-2 items-center border-b-2 border-gray-100">
    <div className="col-start-2 col-span-3">
      <Text variant="gray-500" size="sm" text="Info" />
    </div>
    <div className="col-span-3 text-right">
      <Text variant="gray-500" size="sm" text="Change" />
    </div>
    <div className="col-span-2 text-right">
      <Text variant="gray-500" size="sm" text="Date" />
    </div>
  </div>
);

export default ActivityList;
