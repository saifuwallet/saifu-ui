import clsx from 'clsx';
import { View } from 'react-native';

import Spinner from './Spinner.native';
import tw from 'twrnc';
import colors from '../../constants/colors';

const variants = {
  primary: 'bg-orange-500 text-white',
  secondary: 'hover:bg-gradient-to-bl bg-gradient-to-br from-pink-500 to-orange-500 text-white',
  inverse: 'hover:text-orange-500 text-black dark:text-white',
  ghost: 'hover:text-orange-500 text-black dark:text-white',
  danger: `${colors.background.danger} text-white`,
};

const sizes = {
  xs: 'px-3 py-2 text-xs',
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-base',
  xl: 'px-6 py-3.5 text-base',
};

const secondarySizes = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3.5 py-1.5 text-base',
  lg: 'px-4.5 py-2.5 text-base',
  xl: 'px-5.5 py-3 text-base',
};

type IconProps =
  | { startIcon: React.ReactNode; endIcon?: never }
  | { endIcon: React.ReactNode; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

export type OwnProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  children: React.ReactNode;
} & IconProps;

const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  startIcon,
  endIcon,
  children,
}: OwnProps) => {
  return (
    <View
      style={tw.style(
        'disabled:opacity-70 disabled:cursor-not-allowed rounded-lg focus:outline-none font-medium text-center',
        variants[variant],
        variant === 'secondary' ? 'p-0.5' : sizes[size]
      )}
    >
      <View
        style={tw.style(
          'flex justify-center',
          variant === 'secondary' && 'bg-white dark:bg-black text-orange-600 rounded-md',
          variant === 'secondary' && secondarySizes[size]
        )}
      >
        <>
          <View style={tw`my-auto`}>{isLoading ? <Spinner /> : startIcon}</View>
          {children}
          {endIcon && <View style={tw`my-auto`}>{endIcon}</View>}
        </>
      </View>
    </View>
  );
};

export default Button;
