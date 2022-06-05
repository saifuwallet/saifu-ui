import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, FC } from 'react';
import Text from './Elements/Text';

import { Box, PolymorphicComponentProps } from 'react-polymorphic-box';

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
        as={defaultElement}
        ref={ref}
        aria-disabled={isDisabled}
        className={clsx(
          'flex p-4 transition-all ease-in-out duration-200 hover:bg-gray-50 cursor-pointer w-full',
          isDisabled && 'cursor-not-allowed',
          className
        )}
        {...props}
      >
        {StartIcon && (
          <div className={clsx('flex-none pr-4 m-auto')}>
            {StartIcon && <StartIcon className="h-7 w-7 text-gray-400" />}
          </div>
        )}
        <div className="flex-grow w-56 mr-3">
          <Text as="p" className="text-left" weight="semibold" text={text} />
          <Text as="p" className="text-left" size="sm" variant="secondary" text={subText} />
        </div>
      </Box>
    );
  }
);

export default React.memo(SettingListItem);
