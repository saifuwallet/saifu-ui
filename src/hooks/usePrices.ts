import { useQuery } from 'react-query';

import { getPrices } from '../lib/coingecko';

import useTokenMap from './useTokenMap';

export default function usePrices(mints: string[]) {
  const tokenMap = useTokenMap();

  return useQuery(['prices', mints], async () => {
    const coingeckoInfos = mints.map((addr) => ({
      coingeckoId: tokenMap.get(addr)?.extensions?.coingeckoId,
      mint: addr,
    }));

    const prices = await getPrices(
      coingeckoInfos.map((i) => i.coingeckoId).filter((info) => info !== undefined) as string[]
    );

    return coingeckoInfos.reduce(
      (result, info) => (
        (result[info.mint] = info.coingeckoId ? prices[info.coingeckoId].usd : 0), result
      ),
      {} as Record<string, number>
    );
  });
}
