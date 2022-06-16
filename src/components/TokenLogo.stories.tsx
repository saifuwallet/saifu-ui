import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TokenLogo from './TokenLogo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/TokenLogo',
  component: TokenLogo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TokenLogo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TokenLogo> = (args) => <TokenLogo {...args} />;

export const Sizes = () => (
  <div>
    <TokenLogo
      size="xs"
      url="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
    />
    <TokenLogo
      size="sm"
      url="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
    />
    <TokenLogo
      size="md"
      url="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
    />
    <TokenLogo
      size="lg"
      url="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"
    />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  url: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
};

export const Loading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
  url: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
  isLoading: true,
};

export const LoadingFail = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoadingFail.args = {
  url: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logoasdasd.png',
  isLoading: true,
};

export const Large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Large.args = {
  size: 'lg',
  url: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
};

export const ExtraLarge = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExtraLarge.args = {
  size: 'xl',
  url: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
};

export const Small = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Small.args = {
  size: 'sm',
  url: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
};

export const ExtraSmall = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExtraSmall.args = {
  size: 'xs',
  url: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
};

export const NoInfo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoInfo.args = {};
