import { TokenInfo } from '@solana/spl-token-registry';
import { useQuery } from 'react-query';

import { getPrice } from '../lib/coingecko';

export default function usePrice(tokenInfo?: TokenInfo) {
  return useQuery(['price', tokenInfo?.symbol], async () => {
    return tokenInfo?.extensions?.coingeckoId
      ? getPrice(tokenInfo?.extensions?.coingeckoId)
      : undefined;
  });
}
