import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconButton from './IconButton';
import { SearchIcon, StarIcon } from '@heroicons/react/solid';
import { ArrowCircleRightIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/outline';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/IconButton',
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Variants = () => (
  <div className="space-x-1">
    <IconButton icon={SearchIcon} />
    <IconButton icon={SearchIcon} variant="secondary" />
    <IconButton icon={SearchIcon} variant="ghost" />
    <IconButton icon={SearchIcon} variant="danger" />
  </div>
);

export const Sizes = () => (
  <div className="space-x-1">
    <IconButton icon={SearchIcon} size="xs" />
    <IconButton icon={SearchIcon} size="sm" />
    <IconButton icon={SearchIcon} size="md" />
    <IconButton icon={SearchIcon} size="lg" />
    <IconButton icon={SearchIcon} size="xl" />
    <IconButton icon={SearchIcon} size="2xl" />
    <IconButton icon={SearchIcon} size="3xl" />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'IconButton',
  icon: ArrowCircleRightIcon,
  variant: 'primary',
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  label: 'IconButton',
  icon: SearchIcon,
  variant: 'secondary',
};

export const Ghost = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Ghost.args = {
  label: 'IconButton',
  icon: StarIcon,
  variant: 'ghost',
};

export const Rounded = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rounded.args = {
  label: 'IconButton',
  icon: SearchIcon,
  variant: 'secondary',
  rounded: 'full',
};
