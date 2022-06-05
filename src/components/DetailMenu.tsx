import { Menu } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/solid';
import IconButton from './Elements/IconButton';

const DetailMenu = ({
  children,
  buttonSize = 'md',
}: {
  children: React.ReactNode;
  buttonSize?: 'md' | 'sm' | 'xs';
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button as={IconButton} icon={DotsVerticalIcon} size={buttonSize} variant="ghost" />
      <Menu.Items className="absolute right-0 top-6 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1">{children}</div>
      </Menu.Items>
    </Menu>
  );
};

export default DetailMenu;
