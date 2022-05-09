import '../src/index.css';
import SaifuUIProvider from '../src/contexts/SaifuUIProvider';
import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';
import { QueryClient } from 'react-query';
import { useEffect, useState } from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const [tokenMap, setTokenMap] = useState<Map<string, TokenInfo>>(new Map());
    const queryClient = new QueryClient();
    useEffect(() => {
      new TokenListProvider().resolve().then((tokens) => {
        const tokenList = tokens.filterByClusterSlug('mainnet-beta').getList();

        setTokenMap(
          tokenList.reduce((map, item) => {
            map.set(item.address, item);
            return map;
          }, new Map())
        );
      });
    }, [setTokenMap]);

    return (
      <SaifuUIProvider tokenMap={tokenMap} queryClient={queryClient}>
        <Story />
      </SaifuUIProvider>
    );
  },
];
