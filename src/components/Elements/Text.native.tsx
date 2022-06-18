import React from 'react';

import { Text as NativeText } from 'react-native';
import tw from 'twrnc';

export const variants = {
  primary: 'text-black dark:text-white',
  secondary: 'text-gray-500 dark:text-zinc-400',
  'gray-500': 'text-gray-500 dark:text-zinc-400',
  'gray-400': 'text-gray-400 dark:text-zinc-500',
  inverse: 'text-white dark:text-black',
  inverseSecondary: 'text-orange-200',
  danger: 'text-red-500',
  success: 'text-green-500',
};

export const sizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
};

export const weights = {
  bold: 'font-bold',
  semibold: 'font-semibold',
  normal: 'font-normal',
  medium: 'font-medium',
  light: 'font-light',
  thin: 'font-thin',
};

export type OwnProps = {
  isLoading?: boolean;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  weight?: keyof typeof weights;
  children: React.ReactNode;
};

const Text = ({
  isLoading,
  variant = 'primary',
  size = 'md',
  weight = 'normal',
  children,
}: OwnProps) => {
  return (
    <NativeText
      style={tw.style(
        variants[variant],
        sizes[size],
        weights[weight],
        isLoading && '!text-transparent bg-gray-300 rounded animate-pulse'
      )}
    >
      {children}
    </NativeText>
  );
};

export default Text;
