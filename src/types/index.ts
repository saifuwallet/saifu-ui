export type { default as TokenAccount } from './TokenAccount';
export type { default as TokenMetadata } from './TokenMetadata';

export interface AssetMetadata {
  data?: {
    name: string;
    symbol?: string;
    image?: string;
    address?: string;
    mintAddress?: string;
  };
  isLoading?: boolean;
}

export interface Price {
  data?: {
    vsCurrency?: {
      usd?: number;
      jpy?: number;
    };
    provider?: string; // coingecko, jupiter, ftx
    url?: string; // link to the price info
  };
  isLoading?: boolean;
}

export interface Balance {
  data?: {
    amount: number;
    decimals: number;
    type?: string; // smart contract, wallet, cex etc.
    url?: string; // explorer url, cex site etc.
    hasYield?: boolean; // whether the asset has any yield
    yieldBPS?: number; // if the asset has any yield
    yieldType?: 'APR' | 'APY';
  };
  isLoading?: boolean;
}
