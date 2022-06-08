import React, { useMemo } from 'react';
import TokenAccount from '@/types/TokenAccount';

import usePrice from '@/hooks/usePrice';
import useTokenMap from '@/hooks/useTokenMap';
import { displayAmount, displayUSD, lamportsToSol } from '@/lib/number';
import { short } from '@/lib/publicKey';

import TokenLogo from './TokenLogo';
import Text from './Elements/Text';
import clsx from 'clsx';
import { TokenMetadata } from '@/types';
import Box from './Box';

export type AssetListItemProps = {
  mint: string;
  tokenAccount?: TokenAccount;
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  metadata?: TokenMetadata;
};

const AssetListItem = ({
  className,
  tokenAccount,
  metadata,
  onClick,
  isLoading,
  mint,
}: AssetListItemProps) => {
  const tokenMap = useTokenMap();
  const info = tokenMap.get(mint);
  const price = usePrice(info);
  const tokenBalance = useMemo(
    () => tokenAccount && lamportsToSol(Number(tokenAccount.amount), tokenAccount.decimals),
    [tokenAccount]
  );

  return (
    <Box
      start={
        <TokenLogo size="sm" className="my-auto mr-3" url={info?.logoURI || metadata?.image} />
      }
      className={clsx(
        'p-3 flex transition-all ease-in-out duration-200 hover:bg-gray-50 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <div className="flex leading-5">
        <div className="grow">
          <div>
            <Text weight="semibold" isLoading={isLoading}>
              {info?.symbol || metadata?.name || short(mint)}
            </Text>
          </div>
          <div>
            <Text
              size="sm"
              variant="secondary"
              placeholderCharLength={10}
              isLoading={isLoading}
            >{`${displayAmount(Number(tokenAccount?.amount), tokenAccount?.decimals || 0)} ${
              info?.symbol ? info?.symbol : ''
            }`}</Text>
          </div>
        </div>
        <div className="flex-none text-right">
          <div>
            <Text isLoading={price.isLoading} weight="medium" placeholderCharLength={10}>
              {displayUSD(price.data && tokenBalance && tokenBalance * price.data)}
            </Text>
          </div>
          <div>
            <Text
              variant="secondary"
              size="sm"
              isLoading={price.isLoading}
              placeholderCharLength={10}
            >
              {displayUSD(price.data)}
            </Text>
          </div>
        </div>
      </div>
    </Box>
  );
};

AssetListItem.displayName = 'AssetListItem';

export default AssetListItem;
