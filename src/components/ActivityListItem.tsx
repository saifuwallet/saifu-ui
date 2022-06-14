import useTokenMap from '@/hooks/useTokenMap';
import { displayDate } from '@/lib/dayjs';
import { lamportsToSol } from '@/lib/number';
import { short } from '@/lib/publicKey';
import { CheckCircleIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useMemo } from 'react';
import Text from '@/components/Elements/Text';
import Box from './Elements/Box';
import Tag from '@/components/Elements/Tag';

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
  diffs,
}: ActivityListItemProps) => {
  return (
    <Box
      className={clsx(className)}
      start={<CheckCircleIcon className="h-10 w-10 mr-4 text-gray-400 my-auto" />}
      onClick={onClick}
      hover
      clickable
    >
      <div className="flex leading-5">
        <div className="grow overflow-clip">
          <div>
            <Text weight="semibold" isLoading={isLoading}>
              {title}
            </Text>
          </div>
          <div>
            <Text size="sm" variant="secondary" isLoading={isLoading}>
              {displayDate(blockTime)}
            </Text>
          </div>
        </div>
        <div className="flex-none text-right">
          <div className="space-y-1">
            {diffs
              ?.filter((v) => v.amount !== '0')
              .slice(0, 2)
              .map((diff) => (
                <ActivityDiff diff={diff} />
              ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

const ActivityDiff = ({ diff }: { diff: TransactionTokenDifference }) => {
  const tokenMap = useTokenMap();
  const token = tokenMap.get(diff.mint);
  const { amount, negative } = useMemo(() => {
    // use decimals from diff if present, if not use from token, lastly fall back to 0
    // sol is a special case so we can override to 9
    const decimals = diff.isSol ? 9 : diff?.decimals ?? token?.decimals ?? 0;
    const solAmount = lamportsToSol(Number(diff.amount) || 0, decimals);

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
      <Tag
        size="sm"
        variant={negative ? 'danger' : 'success'}
        text={`${negative ? '' : '+'}${amount} ${token?.symbol || short(diff.mint)}`}
      />
    </div>
  );
};

export default ActivityListItem;
