import { Menu } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import Card from './Elements/Card';
import IconButton from './Elements/IconButton';

const DetailMenu = ({
  children,
  buttonSize = 'md',
}: {
  children: React.ReactNode;
  buttonSize?: 'md' | 'sm' | 'xs';
}) => {
  return (
    <Menu as="div" className="z-10 relative inline-block text-left">
      <Menu.Button as={IconButton} icon={DotsVerticalIcon} size={buttonSize} variant="ghost" />
      <Menu.Items as={Fragment}>
        <Card className="absolute p-2 right-0 top-6 w-56 mt-2 origin-top-right overflow-clip drop-shadow-2xl">
          {children}
        </Card>
      </Menu.Items>
    </Menu>
  );
};

export default DetailMenu;
