// import { Dialog, Transition } from '@headlessui/react'
// import { XMarkIcon } from '@heroicons/react/24/outline'
// import { Fragment } from 'react'


// export const Modal = ({ children, title, onClose }) => {

// 	return (
// 		<Transition.Root show={true} as={Fragment}>
// 			<Dialog as="div" className="relative z-10 " onClose={() => onClose?.()}>
// 				<Transition.Child
// 					as={Fragment}
// 					enter="ease-out duration-300"
// 					enterFrom="opacity-0"
// 					enterTo="opacity-100"
// 					leave="ease-in duration-200"
// 					leaveFrom="opacity-100"
// 					leaveTo="opacity-0">
// 					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity mx-auto max-w-lg" />
// 				</Transition.Child>
// 				<div className="fixed inset-0 z-10 overflow-y-auto">
// 					<div
// 						className='flex min-h-full justify-center p-4 text-center items-center sm:p-0'
// 						>
// 						<Transition.Child
// 							as={Fragment}
// 							enter="ease-out duration-300"
// 							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
// 							enterTo="opacity-100 translate-y-0 sm:scale-100"
// 							leave="ease-in duration-200"
// 							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
// 							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
// 							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:item-center lg:w-fit sm:p-6">
// 								<div className='sm:flex-auto mt-4 flex justify-between'>
// 									<h1 className=" font-semibold leading-6 text-gray-900 text-2xl ml-2">{title}</h1>
// 									{onClose && (
// 										<div onClick={onClose}>
// 											<XMarkIcon className="text-black bg-white h-6 w-6 cursor-pointer" />
// 										</div>
// 									)}
// 								</div>
// 								{children}
// 							</Dialog.Panel>
// 						</Transition.Child>
// 					</div>
// 				</div>
// 			</Dialog>
// 		</Transition.Root>
// 	)
// }


import React from 'react';

export const Modal = ({ children, title, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title">{title}</h1>
          {onClose && (
            <div onClick={onClose} className="modal-close">
              &#x2715;
            </div>
          )}
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

