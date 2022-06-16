import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Asset from './Asset';
import TokenAccount from '@/types/TokenAccount';
import { AssetList } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Asset',
  component: Asset,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Asset>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Asset> = (args) => <Asset {...args} />;

export const List = () => (
  <AssetList>
    <Asset
      metadata={{
        data: {
          name: 'Name',
          symbol: 'SYMBOL',
        },
      }}
      balance={{
        data: {
          amount: 500,
          decimals: 0,
        },
      }}
      price={{
        data: {
          vsCurrency: {
            usd: 1,
          },
        },
      }}
    />
    <Asset
      metadata={{
        data: {
          name: 'USD Coin',
          symbol: 'USDC',
          image:
            'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
        },
      }}
      balance={{
        data: {
          amount: 500,
          decimals: 0,
        },
      }}
      price={{
        data: {
          vsCurrency: {
            usd: 1,
          },
        },
      }}
    />
    <Asset
      metadata={{
        data: {
          name: 'Solend USDC',
          image:
            'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
        },
      }}
      balance={{
        data: {
          amount: 500,
          decimals: 0,
          hasYield: true,
          yieldBPS: 1,
          yieldType: 'APY',
        },
      }}
      price={{
        data: {
          vsCurrency: {
            usd: 1,
          },
        },
      }}
    />
    <Asset
      metadata={{
        data: {
          name: 'USD Coin',
          symbol: 'USDC',
          image:
            'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
        },
      }}
      balance={{
        data: {
          amount: 500,
          decimals: 0,
        },
      }}
      price={{
        data: {
          vsCurrency: {
            usd: 1,
          },
        },
      }}
    />
    <Asset
      metadata={{
        data: {
          name: 'USD Coin',
          symbol: 'USDC',
          image:
            'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
        },
      }}
      balance={{
        data: {
          amount: 500,
          decimals: 0,
        },
      }}
      price={{
        data: {
          vsCurrency: {
            usd: 1,
          },
        },
      }}
    />
  </AssetList>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  metadata: {
    data: {
      name: 'Name',
      symbol: 'SYMBOL',
    },
  },
  balance: {
    data: {
      amount: 500,
      decimals: 0,
    },
  },
  price: {
    data: {
      vsCurrency: {
        usd: 1,
      },
    },
  },
};

export const Loading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
  metadata: {
    isLoading: true,
  },
  balance: {
    isLoading: true,
  },
  price: {
    isLoading: true,
  },
};

export const WithImage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithImage.args = {
  metadata: {
    data: {
      name: 'Name',
      symbol: 'SYMBOL',
      image:
        'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
    },
  },
  balance: {
    data: {
      amount: 500,
      decimals: 0,
    },
  },
  price: {
    data: {
      vsCurrency: {
        usd: 1,
      },
    },
  },
};
