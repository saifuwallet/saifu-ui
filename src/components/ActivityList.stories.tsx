import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ActivityList from './ActivityList';

import { Primary as PrimaryActivityListItem } from './ActivityListItem.stories';
import ActivityListItem, { ActivityListItemProps } from './ActivityListItem';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ActivityList',
  component: ActivityList,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ActivityList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof ActivityList> = (args) => (
  <ActivityList {...args}>
    <ActivityListItem {...(PrimaryActivityListItem.args as ActivityListItemProps)} />
    <ActivityListItem {...(PrimaryActivityListItem.args as ActivityListItemProps)} />
    <ActivityListItem {...(PrimaryActivityListItem.args as ActivityListItemProps)} />
    <ActivityListItem {...(PrimaryActivityListItem.args as ActivityListItemProps)} />
  </ActivityList>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
