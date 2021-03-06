import { useMemo } from 'react';

import { displayUSD } from '@/lib/number';
import Input from '@/components/Form/Input';
import Button from '@/components/Elements/Button';
import Text from '@/components/Elements/Text';
import TokenLogo from '@/components/TokenLogo';
import clsx from 'clsx';
import Card from '../Elements/Card';

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`);
export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export interface AmountInputProps {
  symbol: string;
  logoURI?: string;
  amount?: string;
  setAmount?: (amount: string) => void;
  className?: string;
  onClick?: () => void;
  max?: string;
  price?: number;
  priceIsLoading?: boolean;
  amountIsLoading?: boolean;
}

export default function AmountInput({
  symbol,
  logoURI,
  onClick,
  amount,
  setAmount,
  className,
  max,
  price,
  priceIsLoading,
  amountIsLoading,
}: AmountInputProps) {
  const amountInUSD = useMemo(
    () => displayUSD(price ? Number(amount) * price : undefined, ''),
    [amount, price]
  );

  return (
    <Card variant="flat" className={clsx('p-2', className)}>
      <div className="flex">
        <div className="flex-grow w-32">
          <Input
            name="amount"
            variant="transparent"
            type="text"
            placeholder="0.00"
            inputMode="decimal"
            autoComplete="off"
            autoCorrect="off"
            pattern="^[0-9]*[.]?[0-9]*$"
            value={amount}
            onChange={(e) =>
              setAmount &&
              inputRegex.test(escapeRegExp(e.target.value)) &&
              setAmount(e.target.value)
            }
            className={clsx(
              'form-input text-lg font-medium text-ellipsis dark:text-white',
              amountIsLoading && 'animate-pulse'
            )}
            disabled={!setAmount}
          />
        </div>
        <div className="flex-none self-center">
          <Button
            className={clsx('group', !onClick && 'cursor-default')}
            variant="inverse"
            size="md"
            type="button"
            onClick={onClick}
          >
            <TokenLogo className="mr-2 self-center" size="xs" url={logoURI} />
            <Text
              size="lg"
              weight="medium"
              className={clsx(onClick && 'group-hover:text-orange-500')}
            >
              {symbol}
            </Text>
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-baseline">
        <div className="py-1 px-2">
          <Text
            size="sm"
            variant="secondary"
            placeholderCharLength={10}
            isLoading={priceIsLoading || amountIsLoading}
          >
            {amountInUSD}
          </Text>
          &nbsp;
        </div>
        {max && setAmount && (
          <Text
            as="button"
            className="hover:text-orange-500 p-2 px-4"
            size="xs"
            variant="gray-500"
            type="button"
            onClick={() => setAmount(max)}
          >{`Max: ${max}`}</Text>
        )}
      </div>
    </Card>
  );
}
