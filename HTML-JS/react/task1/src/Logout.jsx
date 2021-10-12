import React from 'react';

const Logout = ({ onLogin }) => {
  return (
    <button className="logout btn" onClick={onLogin}>
      Logout
    </button>
  );
};
export default Logout;
