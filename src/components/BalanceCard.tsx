import { Card, TokenLogo, Text } from '.';
import clsx from 'clsx';
import React from 'react';

export type BalanceCardProps = {
  className?: string;
  logoURI?: string;
  onClick?: () => void;
  title?: string;
  subTitle?: string;
  primaryValue: string;
  secondaryValue: string;
  isLoading?: boolean;
};

const BalanceCard = ({
  className,
  logoURI,
  onClick,
  title,
  subTitle,
  primaryValue,
  secondaryValue,
  isLoading,
}: BalanceCardProps) => {
  return (
    <Card
      className={clsx('flex space-x-2 transition-all ease-in-out', className)}
      onClick={onClick}
      hover
    >
      <div className="flex-none">
        <TokenLogo url={logoURI} />
      </div>

      <div className="flex-grow text-left">
        <div>
          <Text weight="semibold" isLoading={isLoading} text={title} />
        </div>
        <div>
          <Text isLoading={isLoading} text={subTitle} variant="secondary" />
        </div>
      </div>

      <div className="flex-none text-right">
        <div>
          <Text weight="bold" isLoading={isLoading} text={primaryValue} />
        </div>
        <div>
          <Text isLoading={isLoading} text={secondaryValue} variant="secondary" />
        </div>
      </div>
    </Card>
  );
};

BalanceCard.displayName = 'BalanceCard';

export default BalanceCard;
