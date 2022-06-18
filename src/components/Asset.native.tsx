import React, { useMemo } from 'react';
import { View } from 'react-native';

import { displayAmount, displayUSD, lamportsToSol } from '@/lib/number';

import Text from './Elements/Text.native';
import tw from 'twrnc';
import { AssetMetadata, Balance, Price } from '@/types';
import TokenLogoNative from './TokenLogo.native';

export type AssetProps = {
  metadata?: AssetMetadata;
  balance?: Balance;
  price?: Price;
};

const Asset = ({ metadata, balance, price }: AssetProps) => {
  const tokenBalance = useMemo(
    () => balance?.data && lamportsToSol(Number(balance.data.amount), balance.data.decimals),
    [balance?.data]
  );

  const uiAmount = useMemo(
    () => ({
      isLoading: balance?.isLoading || metadata?.isLoading,
      amount: `${displayAmount(Number(balance?.data?.amount), balance?.data?.decimals || 0)} ${
        metadata?.data?.symbol ? metadata?.data?.symbol : ''
      }`,
    }),
    [metadata, balance]
  );

  const usdAmount = useMemo(
    () =>
      displayUSD(
        price?.data?.vsCurrency?.usd && tokenBalance && tokenBalance * price.data.vsCurrency?.usd
      ),
    [price?.data, tokenBalance]
  );

  return (
    <View
      style={tw.style(
        'px-4 py-2.5 bg-gray-100 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:rounded-lg'
      )}
    >
      <View style={tw.style('flex-row')}>
        <View style={tw.style('flex-none self-center mr-2')}>
          <TokenLogoNative url={metadata?.data?.image} />
        </View>
        <View style={tw.style('grow')}>
          <View style={tw.style('flex-row leading-6')}>
            <View style={tw.style('grow')}>
              <View>
                <Text weight="semibold" isLoading={metadata?.isLoading}>
                  {metadata?.data?.symbol || metadata?.data?.name}
                </Text>
              </View>
              <View>
                <Text size="sm" variant="secondary" isLoading={uiAmount.isLoading}>
                  {uiAmount.amount}
                </Text>
              </View>
            </View>
            <View style={tw.style('flex-none text-right')}>
              <View>
                <Text isLoading={price?.isLoading} weight="medium">
                  {usdAmount}
                </Text>
              </View>
              <View>
                <Text variant="secondary" size="sm" isLoading={price?.isLoading}>
                  {displayUSD(price?.data?.vsCurrency?.usd)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Asset;
