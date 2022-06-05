import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SettingListItem from './SettingListItem';
import TokenAccount from '@/types/TokenAccount';
import { StarIcon } from '@heroicons/react/solid';
import { CogIcon } from '@heroicons/react/outline';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/SettingListItem',
  component: SettingListItem,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SettingListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SettingListItem> = (args) => <SettingListItem {...args} />;

const tokenAccount: TokenAccount = {
  mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  amount: '100000000123456789',
  decimals: 9,
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: 'text',
  subText: 'sub text',
  isSelected: false,
  isLoading: false,
  isDisabled: false,
  startIcon: CogIcon,
};

export const WithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcon.args = {
  text: 'text',
  subText: 'sub text',
  isSelected: false,
  isLoading: false,
  isDisabled: false,
  startIcon: StarIcon,
};

export const Selected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Selected.args = {
  text: 'text',
  subText: 'sub text',
  isSelected: true,
  isLoading: false,
  isDisabled: false,
};

export const Disabled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Disabled.args = {
  text: 'text',
  subText: 'sub text',
  isSelected: false,
  isLoading: false,
  isDisabled: true,
};
