import React from 'react';

import tw from 'twrnc';
import { View, StyleProp } from 'react-native';
export type OwnProps = {
  start?: React.ReactNode;
  hover?: boolean;
  clickable?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Box = ({ start, hover, clickable, className, children, ...props }: OwnProps) => {
  return (
    <View
      style={tw.style(
        'p-4 flex',
        hover &&
          'transition transform-gpu ease-in-out duration-200 hover:bg-gray-50 dark:hover:bg-zinc-700 hover:rounded-lg',
        clickable && 'cursor-pointer',
        className
      )}
    >
      <View style={tw.style('flex-none self-center')}>{start}</View>
      <View style={tw.style('grow')}>{children}</View>
    </View>
  );
};

export default Box;
