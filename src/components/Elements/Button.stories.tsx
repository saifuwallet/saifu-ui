import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { StarIcon } from '@heroicons/react/solid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const All = () => (
  <div className="space-x-1">
    <Button>Button</Button>
    <Button variant="secondary">Button</Button>
    <Button variant="ghost">Button</Button>
    <Button variant="inverse">Button</Button>
    <Button variant="danger">Button</Button>
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Button',
  children: 'Primary',
  variant: 'primary',
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  label: 'Button',
  children: 'Primary',
  variant: 'secondary',
};

export const PrimaryWithStartIcon = Template.bind({});
PrimaryWithStartIcon.args = {
  label: 'Button',
  children: 'Primary',
  startIcon: StarIcon,
  variant: 'primary',
};

export const PrimaryWithEndIcon = Template.bind({});
PrimaryWithEndIcon.args = {
  label: 'Button',
  children: 'Primary',
  endIcon: StarIcon,
  variant: 'primary',
};

export const GhostWithEndIcon = Template.bind({});
GhostWithEndIcon.args = {
  label: 'Button',
  children: 'Ghost',
  endIcon: StarIcon,
  variant: 'ghost',
};

export const Inverse = Template.bind({});
Inverse.args = {
  label: 'Button',
  children: 'Inverse',
  variant: 'inverse',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  children: 'Danger',
  variant: 'danger',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Button',
  children: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
  children: 'Small',
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Button',
  children: 'Loading',
  variant: 'primary',
  isLoading: true,
};
