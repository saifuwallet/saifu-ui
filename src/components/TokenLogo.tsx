import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import React from 'react';

export type TokenLogoProps = {
  url?: string;
  size?: keyof typeof sizes;
  shape?: keyof typeof shapes;
  className?: string;
};

const shapes = {
  round: 'rounded-full',
  square: 'rounded',
};

const sizes = {
  sm: 'h-6 w-6',
  md: 'h-12 w-12',
  lg: 'h-24 w-24',
};

function TokenLogo({ url, size = 'md', shape = 'round', className }: TokenLogoProps) {
  return url ? (
    <img
      loading="lazy"
      className={clsx(sizes[size], shapes[shape], className)}
      src={url}
      alt="logo"
    />
  ) : (
    <QuestionMarkCircleIcon className={clsx('text-gray-400', sizes[size])} />
  );
}

export default React.memo(TokenLogo);
