import clsx from 'clsx';
import React from 'react';
import { CgSpinnerAlt } from 'react-icons/cg';

const Spinner = ({ className }: { className?: string }) => {
  return <CgSpinnerAlt className={clsx('animate-spin', className)} />;
};

export default Spinner;
