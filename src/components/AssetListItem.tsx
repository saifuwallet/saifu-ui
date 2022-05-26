import React, { useMemo } from 'react';
import TokenAccount from '@/types/TokenAccount';

import usePrice from '@/hooks/usePrice';
import useTokenMap from '@/hooks/useTokenMap';
import { displayAmount, displayUSD, lamportsToSol } from '@/lib/number';
import { short } from '@/lib/publicKey';

import TokenLogo from './TokenLogo';
import Text from './Text';
import clsx from 'clsx';

export type AssetListItemProps = {
  mint: string;
  tokenAccount?: TokenAccount;
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  metadata?: TokenMetadata;
};

export interface TokenMetadata {
  name: string;
  image: string;
}

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
  // token metadata from metadata program (if available)
  // const metadata = useTokenMetadata(tokenAccount.mint);
  const tokenBalance = useMemo(
    () => tokenAccount && lamportsToSol(Number(tokenAccount.amount), tokenAccount.decimals),
    [tokenAccount]
  );

  return (
    <div
      className={clsx(
        'p-3 grid grid-cols-5 lg:grid-cols-9 gap-x-2 transition-all ease-in-out items-center duration-200 hover:bg-gray-50 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <div className="col-span-1 row-span-2">
        <TokenLogo
          size="sm"
          className="object-contain m-auto"
          url={info?.logoURI || metadata?.image}
        />
      </div>
      <div className="col-span-2 text-left">
        <Text
          weight="semibold"
          isLoading={isLoading}
          text={info?.name || metadata?.name || short(mint)}
        />
      </div>
      <div className="hidden lg:block col-span-2 text-right">
        <Text
          isLoading={price.isLoading}
          text={displayUSD(price.data)}
          placeholderCharLength={10}
        />
      </div>
      <div className="col-span-2 text-right">
        <Text
          isLoading={price.isLoading}
          text={displayUSD(price.data && tokenBalance && tokenBalance * price.data)}
          weight="semibold"
          placeholderCharLength={10}
        />
      </div>
      <div className="col-span-4 lg:col-span-2 text-right">
        <Text
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
