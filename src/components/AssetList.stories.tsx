import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AssetList from './AssetList';

import { Primary as PrimaryAssetListItem } from './AssetListItem.stories';
import AssetListItem, { AssetListItemProps } from './AssetListItem';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/AssetList',
  component: AssetList,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AssetList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof AssetList> = (args) => (
  <AssetList {...args}>
    <AssetListItem {...(PrimaryAssetListItem.args as AssetListItemProps)} />
    <AssetListItem {...(PrimaryAssetListItem.args as AssetListItemProps)} />
    <AssetListItem {...(PrimaryAssetListItem.args as AssetListItemProps)} />
    <AssetListItem {...(PrimaryAssetListItem.args as AssetListItemProps)} />
  </AssetList>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
