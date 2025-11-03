// src/components/ui/confirmation-modal.tsx
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FiAlertTriangle, FiX } from 'react-icons/fi';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'warning' | 'info';
}

const variantStyles = {
  danger: {
    bg: 'bg-red-100 dark:bg-red-900/20',
    icon: 'text-red-600 dark:text-red-400',
    confirmButton: 'bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600',
  },
  warning: {
    bg: 'bg-yellow-100 dark:bg-yellow-900/20',
    icon: 'text-yellow-600 dark:text-yellow-400',
    confirmButton: 'bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600',
  },
  info: {
    bg: 'bg-cyan-100 dark:bg-cyan-900/20',
    icon: 'text-cyan-600 dark:text-cyan-400',
    confirmButton: 'bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600',
  },
};

export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger',
}: ConfirmationModalProps) => {
  const styles = variantStyles[variant];

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 text-left align-middle shadow-xl transition-all border border-slate-200 dark:border-slate-700">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 ${styles.bg} rounded-full p-3`}>
                    <FiAlertTriangle className={`w-6 h-6 ${styles.icon}`} />
                  </div>
                  <div className="ml-4 flex-1">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold leading-6 text-slate-900 dark:text-slate-100"
                    >
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-slate-600 dark:text-slate-400">{message}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-4 inline-flex text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                    onClick={onClose}
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors"
                    onClick={onClose}
                  >
                    {cancelText}
                  </button>
                  <button
                    type="button"
                    className={`inline-flex justify-center rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors ${styles.confirmButton}`}
                    onClick={handleConfirm}
                  >
                    {confirmText}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
