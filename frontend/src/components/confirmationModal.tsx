import React from 'react';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-50 px-5 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white  p-6 rounded shadow-lg">
        <h2 className="text-lg font-bold">Confirm Delete</h2>
        <p className="mt-2">Are you sure you want to delete your account? <span className='text-red-500'>This action cannot be undone.</span></p>
        <div className="mt-4 flex justify-end space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
