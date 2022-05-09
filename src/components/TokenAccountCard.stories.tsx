import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TokenAccountCard from './TokenAccountCard';
import TokenAccount from '../types/TokenAccount';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/TokenAccountCard',
  component: TokenAccountCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TokenAccountCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TokenAccountCard> = (args) => <TokenAccountCard {...args} />;

const tokenAccount: TokenAccount = {
  mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
  amount: '10000',
  decimals: 1,
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  tokenAccount,
};

export const NoInfo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoInfo.args = {
  tokenAccount: {
    mint: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdas',
    amount: '10000',
    decimals: 1,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  tokenAccount,
  isLoading: true,
};
