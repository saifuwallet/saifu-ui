import useTokenMap from '@/hooks/useTokenMap';
import { displayDate } from '@/lib/dayjs';
import { displayAmount, lamportsToSol } from '@/lib/number';
import { short } from '@/lib/publicKey';
import { CheckCircleIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import Text from './Text';

export interface ActivityListItemProps {
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  title: string;
  subTitle: string;
  blockTime: number;
  diffs?: TransactionTokenDifference[];
}

export interface TransactionTokenDifference {
  mint: string;
  amount: string;
  isSol: boolean;
  decimals: number;
}

const ActivityListItem = ({
  isLoading,
  className,
  onClick,
  blockTime,
  title,
  subTitle,
  diffs,
}: ActivityListItemProps) => {
  return (
    <div
      className={clsx(
        'p-3 grid grid-cols-6 lg:grid-cols-9 gap-x-2 transition-all ease-in-out items-center duration-200 hover:bg-gray-50 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      <div className="col-span-1 row-span-2">
        <CheckCircleIcon className="h-6 w-6 text-gray-400 m-auto" />
      </div>
      <div className="col-span-3">
        <Text weight="semibold" isLoading={isLoading} text={title} />
      </div>
      <div className="hidden lg:block lg:col-span-3 text-right">
        {diffs
          ?.filter((v) => v.amount !== '0')
          .map((diff) => (
            <ActivityDiff diff={diff} />
          ))}
      </div>
      <div className="col-span-2 text-right">
        <Text isLoading={isLoading} text={displayDate(blockTime)} />
      </div>
      <div className="col-span-5 lg:col-span-6">
        <Text variant="secondary" isLoading={isLoading} text={subTitle} />
      </div>
    </div>
  );
};

const ActivityDiff = ({ diff }: { diff: TransactionTokenDifference }) => {
  const tokenMap = useTokenMap();
  const token = tokenMap.get(diff.mint);
  const { amount, negative } = useMemo(() => {
    const solAmount = lamportsToSol(Number(diff.amount) || 0, diff?.decimals || 0);

    return {
      amount: solAmount.toFixed(4),
      negative: Number(diff.amount) < 0,
    };
  }, [tokenMap, diff]);

  if (parseFloat(amount) === 0) {
    return <></>;
  }

  return (
    <div>
      <Text
        variant={negative ? 'danger' : 'success'}
        text={`${amount} ${token?.symbol || short(diff.mint)}`}
      />
    </div>
  );
};

export default ActivityListItem;
