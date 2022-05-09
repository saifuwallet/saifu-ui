import React, { useMemo } from 'react';
import TokenAccount from '../types/TokenAccount';

import usePrice from '../hooks/usePrice';
import useTokenMap from '../hooks/useTokenMap';
import { displayUSD, lamportsToSol } from '../lib/number';
import { short } from '../lib/publicKey';

import BalanceCard from './BalanceCard';

export type TokenAccountCardProps = {
  tokenAccount: TokenAccount;
  onClick?: () => void;
  isLoading?: boolean;
};

const TokenAccountCard = ({ tokenAccount, onClick, isLoading }: TokenAccountCardProps) => {
  const tokenMap = useTokenMap();
  const info = tokenMap.get(tokenAccount.mint);
  const price = usePrice(info);
  // token metadata from metadata program (if available)
  // const metadata = useTokenMetadata(tokenAccount.mint);
  const tokenPrice = useMemo(() => displayUSD(price.data), [price]);
  const tokenBalance = useMemo(
    () => lamportsToSol(Number(tokenAccount.amount), tokenAccount.decimals),
    [tokenAccount]
  );
  const tokenBalanceUSD = useMemo(
    () => displayUSD(price.data && tokenBalance * price.data),
    [tokenBalance, price]
  );
  const tokenBalanceStr = useMemo(
    () => `${tokenBalance} ${info?.symbol || ''}`,
    [info?.symbol, tokenBalance]
  );
  return (
    <BalanceCard
      onClick={onClick}
      title={info?.name || short(tokenAccount.mint)}
      subTitle={tokenPrice}
      logoURI={info?.logoURI}
      primaryValue={tokenBalanceStr}
      secondaryValue={tokenBalanceUSD}
      isLoading={isLoading}
    />
  );
};

TokenAccountCard.displayName = 'TokenAccountCard';

export default TokenAccountCard;
