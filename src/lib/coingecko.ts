export const getPrice = async (coingeckoId: string) => {
  if (stablecoinIds.includes(coingeckoId)) {
    return 1;
  }
  const currencies = 'usd';
  const res = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${coingeckoId}&vs_currencies=${currencies}`
  );
  if (!res.ok) {
    throw new Error(`failed to fetch price for ids ${coingeckoId}`);
  }

  const json = await res.json();
  return json[coingeckoId].usd as number;
};

const stablecoinIds = ['tether', 'usd-coin', 'dai', 'binance-usd'];
