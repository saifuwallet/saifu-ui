import clsx from 'clsx';
import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

const variants = {
  primary: 'shadow-xl bg-white dark:bg-zinc-800',
  flat: 'bg-gray-100 dark:bg-zinc-700',
  bordered: 'bg-white dark:bg-zinc-800 border dark:border-zinc-600',
};

const rounding = {
  none: '',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
};

type OwnProps = {
  variant?: keyof typeof variants;
  rounded?: keyof typeof rounding;
  hover?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

const Card = ({ variant = 'primary', rounded = 'md', onClick, hover, children }: OwnProps) => {
  return (
    <View
      style={tw.style(
        'dark:text-white bg-gray-500',
        variants[variant],
        rounding[rounded],
        onClick && 'cursor-pointer',
        hover &&
          'transition transform-gpu ease-in-out duration-200 hover:bg-gray-50 dark:hover:bg-zinc-700'
      )}
    >
      {children}
    </View>
  );
};

export default Card;
