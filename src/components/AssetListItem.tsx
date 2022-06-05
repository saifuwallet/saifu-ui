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
    <div
      className={clsx(
        'p-3 grid leading-4 grid-cols-5 lg:grid-cols-9 gap-x-2 transition-all ease-in-out items-center duration-200 hover:bg-gray-50 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <div className="col-span-1 row-span-2">
        <TokenLogo size="sm" className="m-auto" url={info?.logoURI || metadata?.image} />
      </div>
      <div className="col-span-2 text-left">
        <Text
          weight="medium"
          isLoading={isLoading}
          text={info?.symbol || metadata?.name || short(mint)}
        />
      </div>
      <div className="hidden lg:block col-span-2 text-right">
        <Text
          size="sm"
          isLoading={price.isLoading}
          text={displayUSD(price.data)}
          placeholderCharLength={10}
        />
      </div>
      <div className="col-span-2 text-right lg:order-last">
        <Text
          size="sm"
          isLoading={price.isLoading}
          text={displayUSD(price.data && tokenBalance && tokenBalance * price.data)}
          weight="medium"
          placeholderCharLength={10}
        />
      </div>
      <div className="col-span-4 lg:col-span-2 lg:text-right">
        <Text
          size="sm"
          placeholderCharLength={10}
          isLoading={isLoading}
          text={`${displayAmount(Number(tokenAccount?.amount), tokenAccount?.decimals || 0)} ${
            info?.symbol ? info?.symbol : ''
          }`}
        />
      </div>
    </div>
  );
};

AssetListItem.displayName = 'AssetListItem';

export default AssetListItem;
