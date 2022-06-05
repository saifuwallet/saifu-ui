import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AmountInput from './AmountInput';
import TokenAccount from '@/types/TokenAccount';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form/AmountInput',
  component: AmountInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AmountInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AmountInput> = (args) => <AmountInput {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  amount: '100',
  symbol: 'SOL',
  max: '200',
  price: 50,
  logoURI:
    'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
};
export const LargeInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LargeInput.args = {
  amount: '81874862.385178',
  symbol: 'wstSOL',
  max: '200',
  setAmount: () => {},
  price: 50,
  logoURI:
    'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
};

export const LoadingPrice = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoadingPrice.args = {
  amount: '100',
  symbol: 'SOL',
  max: '200',
  priceIsLoading: true,
  logoURI:
    'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
};

export const LoadingAmount = Template.bind({});

LoadingAmount.args = {
  amount: '100',
  symbol: 'SOL',
  max: '200',
  amountIsLoading: true,
  price: 50,
  logoURI:
    'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
};

export const Empty = Template.bind({});

Empty.args = {
  amount: '',
  symbol: 'SOL',
  logoURI:
    'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
};
