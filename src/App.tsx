import SaifuUIProvider from './contexts/SaifuUIProvider';
import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';
import { useState, useEffect } from 'react';
import { QueryClient } from 'react-query';
import './index.css';
import TokenAccount from './types/TokenAccount';
import { AssetList, AssetListItem } from './components';

function App() {
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

  const tokenAcc: TokenAccount = {
    mint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    amount: '10000',
    decimals: 1,
  };
  return (
    <SaifuUIProvider tokenMap={tokenMap} queryClient={queryClient}>
      <div className="pt-48 flex justify-center">
        <AssetList className="space-y-2">
          <AssetListItem mint={tokenAcc.mint} tokenAccount={tokenAcc} />
          <AssetListItem mint={tokenAcc.mint} tokenAccount={tokenAcc} />
          <AssetListItem mint={tokenAcc.mint} tokenAccount={tokenAcc} />
        </AssetList>
      </div>
    </SaifuUIProvider>
  );
}

export default App;
