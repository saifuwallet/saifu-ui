import { TokenInfo } from '@solana/spl-token-registry';
import { sort } from 'fast-sort';
import Input from './Form/Input';
import React, { useCallback, useMemo, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

import usePrices from '../hooks/usePrices';
import useTokenMap from '../hooks/useTokenMap';
import { TokenAccount, TokenMetadata } from '../types';
import Modal from './Elements/Modal';
import usePrice from '@/hooks/usePrice';
import { lamportsToSol, displayUSD } from '@/lib/number';
import { short } from '@/lib/publicKey';
import TokenLogo from './TokenLogo';
import Text from './Elements/Text';
import Box from './Elements/Box';

export default function TokenSelectorModal({
  onSelect,
  onClose,
  isOpen,
  tokenAccounts,
}: {
  selectedMint?: string;
  onSelect: (s: string) => void;
  onClose: () => void;
  isOpen: boolean;
  tokenAccounts?: TokenAccount[];
}) {
  const [query, setQuery] = useState('');
  const getTokenAcc = useCallback(
    (mint: string) => tokenAccounts && tokenAccounts.find((acc) => acc.mint === mint),
    [tokenAccounts]
  );
  const tokenMap = useTokenMap();
  const prices = usePrices(tokenAccounts?.map((acc) => acc.mint) || []);

  const tokens = useMemo(() => {
    const res = new Set<string>();
    if (!prices.data || !tokenAccounts) {
      Array.from(tokenMap.values()).forEach((v) => res.add(v.address));
      return Array.from(res);
    }

    sort(tokenAccounts)
      .desc([
        (acc) => (prices.data[acc.mint] * Number(acc.amount)) / Math.pow(10, acc.decimals),
        (acc) => Number(acc.amount) / Math.pow(10, acc.decimals),
      ])
      .forEach((acc) => res.add(acc.mint));

    Array.from(tokenMap.values()).forEach((v) => res.add(v.address));

    return Array.from(res);
  }, [tokenMap, tokenAccounts, prices.data]);

  const filteredTokens = useMemo(
    () => tokens && tokens.filter(filterByQuery(query, tokenMap)),
    [query, tokens]
  );

  return (
    <Modal title="Select Token" isOpen={isOpen} onClose={onClose}>
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="address or name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {filteredTokens && (
          <List
            className="scrollbar-hide"
            itemCount={filteredTokens.length}
            height={300}
            itemSize={60}
            width="100%"
          >
            {({ index, style }) => (
              <TokenListItem
                style={style}
                key={index}
                mint={filteredTokens[index]}
                tokenAccount={getTokenAcc(filteredTokens[index])}
                onClick={() => {
                  onSelect(filteredTokens[index]);
                  onClose();
                }}
              />
            )}
          </List>
        )}
      </div>
    </Modal>
  );
}

type TokenListItemProps = {
  onClick?: () => void;
  mint: string;
  tokenAccount?: TokenAccount;
  metadata?: TokenMetadata;
  style?: React.CSSProperties;
};

const TokenListItem = ({ onClick, mint, style, tokenAccount, metadata }: TokenListItemProps) => {
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
    <Box
      start={
        <TokenLogo size="sm" url={tokenInfo?.logoURI || metadata?.image} className="my-auto mr-3" />
      }
      onClick={onClick}
      hover
      clickable
      style={style}
      className="!p-2"
    >
      <div className="flex leading-5">
        <div className="grow">
          <Text weight="semibold">{tokenInfo?.symbol || metadata?.name || short(mint)}</Text>
        </div>
        <div className="grow text-right">
          <Text>{tokenBalanceUSD}</Text>
        </div>
      </div>
      <div>
        <Text>{`${lamportsToSol(Number(tokenAccount?.amount), tokenAccount?.decimals)}`}</Text>
      </div>
    </Box>
  );
};

export const filterByQuery = (q: string, tokenMap: Map<string, TokenInfo>) => {
  return (mint: string) => {
    const token = tokenMap.get(mint);
    if (q === '') {
      return mint;
    }
    if (token?.address.toLowerCase().includes(q.toLowerCase())) {
      return mint;
    }
    if (token?.symbol && token?.symbol.toLowerCase().includes(q.toLowerCase())) {
      return mint;
    }
    if (token?.name && token?.name.toLowerCase().includes(q.toLowerCase())) {
      return mint;
    }
  };
};
