import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';

import IconButton from './IconButton';
import Text from './Text';

function Modal({
  title,
  onClose,
  isOpen,
  children,
}: {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block max-w-md container p-4 overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl space-y-3">
              <div className="flex justify-between text-left items-center px-2 align-baseline">
                <Dialog.Title as={Text} size="lg" weight="medium">
                  {title}
                </Dialog.Title>
                <IconButton
                  className="my-auto"
                  aria-label="close"
                  variant="ghost"
                  onClick={onClose}
                  icon={XIcon}
                />
              </div>
              <div className="!text-left">{children}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;
