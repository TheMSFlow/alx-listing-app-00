
import React from 'react';
import { ButtonProps } from '../../interfaces/index';

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, type = 'button' }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400`}
    >
      {label}
    </button>
  );
};

export default Button;
