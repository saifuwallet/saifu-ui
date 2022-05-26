import { useMemo } from 'react';

import { displayUSD } from '../lib/number';
import Input from './Input';
import Button from '@/components/Elements/Button';
import Text from './Text';
import TokenLogo from './TokenLogo';
import clsx from 'clsx';

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
    <div className={className}>
      <div className="flex justify-between">
        <div className="flex-grow">
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
            className={clsx('font-bold', amountIsLoading && 'animate-pulse')}
            disabled={!setAmount}
          />
        </div>
        <div className="flex-none">
          <div className="flex justify-end">
            <Button
              startIcon={<TokenLogo size="sm" url={logoURI} />}
              variant="inverse"
              size="lg"
              type="button"
              onClick={onClick}
              text={symbol}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-grow">
          <div className="py-1 px-2">
            <Text
              size="xs"
              variant="secondary"
              text={amountInUSD}
              placeholderCharLength={10}
              isLoading={priceIsLoading || amountIsLoading}
            />
            &nbsp;
          </div>
        </div>
        <div className="flex-none flex justify-end">
          {max && setAmount && (
            <Button
              text={`Max: ${max}`}
              size="xs"
              variant="inverse"
              type="button"
              onClick={() => setAmount(max)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
