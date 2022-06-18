import React, { useMemo } from 'react';

import { displayAmount, displayBPS, displayUSD, lamportsToSol } from '@/lib/number';

import TokenLogo from './TokenLogo';
import Text from './Elements/Text';
import clsx from 'clsx';
import { AssetMetadata, Balance, Price } from '@/types';
import Tag from './Elements/Tag';
import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';

export type OwnProps = {
  metadata?: AssetMetadata;
  balance?: Balance;
  price?: Price;
};

const defaultElement = 'div';
export type AssetProps<E extends React.ElementType> = PolymorphicComponentProps<E, OwnProps>;

const Asset: <E extends React.ElementType = typeof defaultElement>(
  props: AssetProps<E>
) => React.ReactElement | null = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    { className, metadata, onClick, balance, price, ...props }: AssetProps<E>,
    ref: typeof props.ref
  ) => {
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
      <Box
        as={defaultElement}
        ref={ref}
        className={clsx(
          'px-4 py-2.5 transition transform ease-in-out duration-200 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:rounded-lg',
          className
        )}
      >
        <div className="flex">
          <div className="flex-none self-center">
            <TokenLogo
              size="md"
              className="mr-4"
              url={metadata?.data?.image}
              isLoading={metadata?.isLoading}
            />
          </div>
          <div className="grow">
            <div className="flex leading-6">
              <div className="grow">
                <div>
                  <Text weight="semibold" isLoading={metadata?.isLoading}>
                    {metadata?.data?.symbol || metadata?.data?.name}
                  </Text>
                </div>
                <div>
                  <Text
                    size="sm"
                    variant="secondary"
                    placeholderCharLength={10}
                    isLoading={uiAmount.isLoading}
                  >
                    {uiAmount.amount}
                  </Text>
                </div>
              </div>
              <div className="flex-none text-right">
                <div>
                  <Text isLoading={price?.isLoading} weight="medium" placeholderCharLength={10}>
                    {usdAmount}
                  </Text>
                </div>
                <div>
                  <Text
                    variant="secondary"
                    size="sm"
                    isLoading={price?.isLoading}
                    placeholderCharLength={10}
                  >
                    {displayUSD(price?.data?.vsCurrency?.usd)}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-right">
          <Tag text=" " />
          {balance?.data?.hasYield && (
            <Tag
              variant="success"
              text={`${displayBPS(balance.data.yieldBPS)} ${balance.data.yieldType}`}
            />
          )}
        </div>
      </Box>
    );
  }
);

export default Asset;
