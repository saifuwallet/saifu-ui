import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, FC } from 'react';
import Text from './Elements/Text';

import { PolymorphicComponentProps } from 'react-polymorphic-box';
import Box from './Elements/Box';

export type OwnProps = {
  text: string;
  subText?: string;
  startIcon?: FC<ComponentPropsWithoutRef<'svg'>>;
  isDisabled?: boolean;
};

export type SettingListItemProps<E extends React.ElementType> = PolymorphicComponentProps<
  E,
  OwnProps
>;

const defaultElement = 'a';

const SettingListItem: <E extends React.ElementType = typeof defaultElement>(
  props: SettingListItemProps<E>
) => React.ReactElement | null = React.forwardRef(
  <E extends React.ElementType = typeof defaultElement>(
    {
      isDisabled = false,
      startIcon: StartIcon,
      text,
      subText,
      className,
      ...props
    }: SettingListItemProps<E>,
    ref: typeof props.ref
  ) => {
    return (
      <Box
        start={StartIcon && <StartIcon className="h-7 w-7 text-gray-400 mr-4 my-auto" />}
        as={defaultElement}
        ref={ref}
        aria-disabled={isDisabled}
        className={clsx('text-left w-full', isDisabled && 'cursor-not-allowed', className)}
        hover
        clickable
        {...props}
      >
        <Text as="p" weight="semibold">
          {text}
        </Text>
        <Text as="p" size="sm" variant="secondary">
          {subText}
        </Text>
      </Box>
    );
  }
);

export default React.memo(SettingListItem);
