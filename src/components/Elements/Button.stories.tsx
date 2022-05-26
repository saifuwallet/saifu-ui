import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
  text: 'Primary',
  variant: 'primary',
};

export const Inverse = Template.bind({});
Inverse.args = {
  label: 'Button',
  text: 'Inverse',
  variant: 'inverse',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Button',
  text: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
  text: 'Small',
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Button',
  text: 'Loading',
  variant: 'primary',
  isLoading: true,
};