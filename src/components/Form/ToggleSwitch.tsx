import { Switch } from '@headlessui/react';
import clsx from 'clsx';

import colors from '@/constants/colors';

interface Props {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

function ToggleSwitch({ enabled, onChange }: Props) {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={clsx(
        'relative inline-flex flex-shrink-0 h-[18px] w-[34px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75',
        enabled ? colors.background.highlight : 'bg-gray-400'
      )}
    >
      <span
        aria-hidden="true"
        className={clsx(
          'pointer-events-none inline-block h-[14px] w-[14px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200',
          enabled ? 'translate-x-4' : 'translate-x-0'
        )}
      />
    </Switch>
  );
}

export default ToggleSwitch;
