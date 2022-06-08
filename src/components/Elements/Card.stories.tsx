import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Elements/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Card',
  children: 'Primary',
  variant: 'primary',
};

export const Flat = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Flat.args = {
  primary: true,
  label: 'Card',
  children: 'Flat',
  variant: 'flat',
};

export const Bordered = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Bordered.args = {
  primary: true,
  label: 'Card',
  children: 'Bordered',
  variant: 'bordered',
};
