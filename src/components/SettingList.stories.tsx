import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SettingList from './SettingList';

import { Primary as PrimarySettingListItem } from './SettingListItem.stories';
import SettingListItem, { SettingListItemProps } from './SettingListItem';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/SettingList',
  component: SettingList,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SettingList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof SettingList> = (args) => (
  <SettingList {...args}>
    <SettingListItem {...(PrimarySettingListItem.args as SettingListItemProps<'a'>)} />
    <SettingListItem {...(PrimarySettingListItem.args as SettingListItemProps<'a'>)} />
    <SettingListItem {...(PrimarySettingListItem.args as SettingListItemProps<'a'>)} />
    <SettingListItem {...(PrimarySettingListItem.args as SettingListItemProps<'a'>)} />
  </SettingList>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
