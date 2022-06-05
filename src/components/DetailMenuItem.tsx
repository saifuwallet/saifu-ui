import { Menu } from '@headlessui/react';
import { FC, ComponentProps } from 'react';
import Text from './Elements/Text';
import ListItem from './ListItem';

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
      <ListItem onClick={onClick} className="align-baseline">
        <Icon className="w-5 h-5 my-auto mr-1 text-gray-500" aria-hidden="true" />
        <Text text={title} />
      </ListItem>
    </Menu.Item>
  );
};

export default DetailMenuItem;
