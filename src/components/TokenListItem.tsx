import React, { useMemo } from 'react';

import { displayUSD, lamportsToSol } from '../lib/number';
import ListItem from './ListItem';
import TokenLogo from './TokenLogo';
import Text from './Elements/Text';
import { short } from '../lib/publicKey';
import { TokenAccount, TokenMetadata } from '../types';
import useTokenMap from '../hooks/useTokenMap';
import usePrice from '../hooks/usePrice';

export type TokenListItemProps = {
  onClick?: () => void;
  className?: string;
  mint: string;
  tokenAccount?: TokenAccount;
  metadata?: TokenMetadata;
  style?: React.CSSProperties;
};

const TokenListItem = ({
  onClick,
  className,
  mint,
  style,
  tokenAccount,
  metadata,
}: TokenListItemProps) => {
  const tokenMap = useTokenMap();
  const tokenInfo = tokenMap.get(mint);
  const price = usePrice(tokenInfo);
  const tokenBalance = useMemo(
    () => lamportsToSol(Number(tokenAccount?.amount), tokenAccount?.decimals),
    [tokenAccount]
  );
  const tokenBalanceUSD = useMemo(
    () => displayUSD(price.data && tokenBalance * price.data),
    [tokenBalance, price]
  );

  return (
    <ListItem onClick={onClick} style={style} className={className}>
      <div className="flex-none my-auto">
        <TokenLogo size="sm" url={tokenInfo?.logoURI || metadata?.image} />
      </div>
      <div className="flex-grow text-left">
        <div>
          <Text weight="semibold">{tokenInfo?.symbol || metadata?.name || short(mint)}</Text>
        </div>
      </div>
      <div className="flex-none text-right">
        <div>
          <Text>{`${lamportsToSol(Number(tokenAccount?.amount), tokenAccount?.decimals)}`}</Text>
        </div>
        <div>
          <Text variant="secondary" size="sm">
            {tokenBalanceUSD}
          </Text>
        </div>
      </div>
    </ListItem>
  );
};

TokenListItem.displayName = 'TokenListItem';

export default React.memo(TokenListItem);
