import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ActivityListItem from './ActivityListItem';
import TokenAccount from '@/types/TokenAccount';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/ActivityListItem',
  component: ActivityListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ActivityListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ActivityListItem> = (args) => <ActivityListItem {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'title',
  subTitle: 'subTitle',
  blockTime: 1,
  diffs: [
    {
      mint: 'sol',
      amount: '10000000',
      isSol: true,
    },
  ],
};
