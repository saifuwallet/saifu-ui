import { QuestionMarkCircleIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import React from 'react';
import { useState } from 'react';
import { View, Image } from 'react-native';
import tw from 'twrnc';
import Text from './Elements/Text.native';

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
    <View style={tw.style((isLoading || (url && !imgLoaded)) && 'bg-gray-300', className)}>
      {imgLoadFailed || (!isLoading && !url) ? (
        <Text>Failed</Text>
      ) : (
        <Image
          style={tw.style(sizes[size], shapes[shape])}
          source={{ uri: url }}
          onError={() => {
            setImgLoaded(true);
            setImgLoadFailed(true);
          }}
          onLoad={() => setImgLoaded(true)}
        />
      )}
    </View>
  );
}

export default React.memo(TokenLogo);
