import { Menu } from '@headlessui/react';
import { FC, ComponentProps } from 'react';
import Box from './Elements/Box';
import Text from './Elements/Text';

const DetailMenuItem = ({
  onClick,
  title,
  icon: Icon,
}: {
  onClick: () => void;
  title: string;
  icon: FC<ComponentProps<'svg'>>;
}) => {
  return (
    <Menu.Item>
      <Box
        as="button"
        start={<Icon className="w-5 h-5 my-auto mr-2 text-gray-500" aria-hidden="true" />}
        onClick={onClick}
        className="p-2 text-left align-baseline w-full"
        clickable
        hover
      >
        <Text>{title}</Text>
      </Box>
    </Menu.Item>
  );
};

export default DetailMenuItem;
