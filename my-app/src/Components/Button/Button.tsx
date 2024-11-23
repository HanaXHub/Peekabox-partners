import React from 'react';

import './Button.css'


interface CustomButtonProps {
  label: string;
  loading?: boolean;
}

const Button: React.FC<CustomButtonProps> = ({ label, loading }) => {
  return (
    <div className="login-button-container">
      <button
        type="submit"
        disabled={loading}
        className="login-button"
      >
        {loading ? 'Loading...' : label}
      </button>
    </div>
  );
};

export default Button;
