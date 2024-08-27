import React from 'react';
import { TypeButtonProps } from '../interfaces/TypeButton.type'

const Button: React.FC<TypeButtonProps> = ({ icon, children, type = 'button', className, ...props }) => {
  return (
    <button
      type={type}
      className={`btn relative transition-all duration-300 ease-in-out z-10 font-bold ${className}`}
      {...props}
    >
      {icon && <img src={icon} className="w-5 h-auto transition-all duration-200" />}
      {children}
    </button>
  );
};

export default Button;
