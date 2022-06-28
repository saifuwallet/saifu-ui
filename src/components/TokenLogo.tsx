import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import React, { useState } from 'react';

export type TokenLogoProps = {
  url?: string;
  size?: keyof typeof sizes;
  shape?: keyof typeof shapes;
  className?: string;
  isLoading?: boolean;
};

const shapes = {
  round: 'rounded-full',
  square: 'rounded',
};

const sizes = {
  xs: 'h-6 w-6',
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-24 w-24',
};

function TokenLogo({
  url,
  size = 'md',
  shape = 'round',
  isLoading = false,
  className,
}: TokenLogoProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgLoadFailed, setImgLoadFailed] = useState(false);
  return (
    <div
      className={clsx(
        'overflow-hidden',
        sizes[size],
        shapes[shape],
        (isLoading || (url && !imgLoaded)) && 'animate-pulse bg-gray-300',
        className
      )}
    >
      {imgLoadFailed || (!isLoading && !url) ? (
        <QuestionMarkCircleIcon className={clsx('text-gray-400', sizes[size], className)} />
      ) : (
        <img
          loading="lazy"
          className={clsx('object-cover object-center')}
          src={url}
          alt=""
          onError={() => {
            setImgLoaded(true);
            setImgLoadFailed(true);
          }}
          onLoad={() => setImgLoaded(true)}
        />
      )}
    </div>
  );
}

export default React.memo(TokenLogo);
