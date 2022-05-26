import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Spinner from './Spinner';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Spinner',
  component: Spinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};

export const White = Template.bind({});
White.args = {
  variant: 'white',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const XL = Template.bind({});
XL.args = {
  size: 'xl',
};