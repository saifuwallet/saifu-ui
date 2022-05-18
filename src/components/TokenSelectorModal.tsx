import { TokenInfo } from '@solana/spl-token-registry';
import { sort } from 'fast-sort';
import Input from './Input';
import React, { useCallback, useMemo, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

import usePrices from '../hooks/usePrices';
import useTokenMap from '../hooks/useTokenMap';
import { TokenAccount } from '../types';
import Modal from './Modal';
import TokenListItem from './TokenListItem';

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
  const balances = useMemo(() => {
    if (!prices.data || !tokenAccounts) {
      return [];
    }
    return tokenAccounts.map((acc) => ({
      balance: (prices.data[acc.mint] * Number(acc.amount)) / Math.pow(10, acc.decimals),
      mint: acc.mint,
      amount: Number(acc.amount) / Math.pow(10, acc.decimals),
    }));
  }, [tokenAccounts, prices.data]);
  const tokens = useMemo(() => {
    const tokenAccWithNoInfo = tokenAccounts
      ?.map(
        (a): TokenInfo => ({
          chainId: 101,
          address: a.mint,
          name: '',
          decimals: a.decimals,
          symbol: '',
        })
      )
      .filter((t) => !tokenMap.has(t.address));
    const merged = tokenAccWithNoInfo
      ? [...Array.from(tokenMap.values()), ...tokenAccWithNoInfo]
      : Array.from(tokenMap.values());
    return sort(merged).desc([
      (t) => {
        return balances.find((b) => b.mint.toLowerCase() === t.address.toLowerCase())?.balance;
      },
      (t) => {
        return balances.find((b) => b.mint.toLowerCase() === t.address.toLowerCase())?.amount;
      },
    ]);
  }, [tokenMap, balances, tokenAccounts]);

  const tokenList = useMemo(() => tokens && tokens.filter(filterByQuery(query)), [query, tokens]);

  return (
    <Modal title="Select Token" isOpen={isOpen} onClose={onClose}>
      <div className="space-y-2">
        <Input
          variant="gray"
          type="text"
          placeholder="address or name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {tokenList && (
          <List
            className="scrollbar-hide"
            itemCount={tokenList?.length || 0}
            height={208}
            itemSize={58}
            width="100%"
          >
            {({ index, style }) => (
              <TokenListItem
                style={style}
                key={index}
                mint={tokenList[index].address}
                tokenAccount={getTokenAcc(tokenList[index].address)}
                onClick={() => onSelect(tokenList[index].address)}
              />
            )}
          </List>
        )}
      </div>
    </Modal>
  );
}

export const filterByQuery = (q: string) => {
  return (token: TokenInfo) => {
    if (q === '') {
      return token;
    }
    if (token.address.toLowerCase().includes(q.toLowerCase())) {
      return token;
    }
    if (token.symbol && token.symbol.toLowerCase().includes(q.toLowerCase())) {
      return token;
    }
    if (token.name && token.name.toLowerCase().includes(q.toLowerCase())) {
      return token;
    }
  };
};
