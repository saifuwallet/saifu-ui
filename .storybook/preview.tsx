import '../src/index.css';
import SaifuUIProvider from '../src/contexts/SaifuUIProvider';
import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';
import { QueryClient } from 'react-query';
import { useEffect, useState } from 'react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { useDarkMode } from 'storybook-dark-mode';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      chromeExtension: {
        name: 'Chrome Extension',
        styles: {
          width: '350px',
          height: '600px',
        },
      },
      ...MINIMAL_VIEWPORTS,
    },
    defaultViewport: 'chromeExtension',
  },
  backgrounds: {
    default: 'light',
    values: [{ name: 'black', value: '#000000' }],
  },
};

export const decorators = [
  (Story) => {
    const darkMode = useDarkMode();
    const [tokenMap, setTokenMap] = useState<Map<string, TokenInfo>>(new Map());
    const queryClient = new QueryClient();

    useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [darkMode]);
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
