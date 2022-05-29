import React from 'react';
import Card from './Elements/Card';
import Text from './Text';

const ActivityList = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card size="noPadding">
      <ActivityListHeader />
      <div className="divide-y">{children}</div>
    </Card>
  );
};

const ActivityListHeader = () => (
  <div className="hidden p-3 lg:grid lg:grid-cols-9 gap-x-2 transition-all ease-in-out items-center duration-200 border-b-2 border-gray-100">
    <div className="col-start-2 col-span-3">
      <Text variant="secondary" weight="semibold" text="Info" />
    </div>
    <div className="col-span-3 text-right">
      <Text variant="secondary" weight="semibold" text="Change" />
    </div>
    <div className="col-span-2 text-right">
      <Text variant="secondary" weight="semibold" text="Date" />
    </div>
  </div>
);

export default ActivityList;
