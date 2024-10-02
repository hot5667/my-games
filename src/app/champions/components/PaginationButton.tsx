import React from 'react';

interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  label: string;
}

function PaginationButton({ onClick, disabled, label }: PaginationButtonProps) {
  return (
    <button 
      className={`p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default PaginationButton;