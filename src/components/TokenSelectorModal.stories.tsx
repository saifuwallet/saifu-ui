import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TokenSelectorModal from './TokenSelectorModal';
import TokenAccount from '@/types/TokenAccount';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/TokenSelectorModal',
  component: TokenSelectorModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TokenSelectorModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TokenSelectorModal> = (args) => (
  <TokenSelectorModal {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  isOpen: true,
  tokenAccounts: [
    {
      mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
      amount: '100000000123456789',
      decimals: 9,
    },
    {
      mint: 'asdasdasdasdasdasdasdasdasdasdasdasdasdasdas',
      amount: '10000',
      decimals: 1,
    },
  ],
};
