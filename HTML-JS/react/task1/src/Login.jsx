import React from 'react';

// input: props(obj)
// output: JSX
const Login = ({ onLogin }) => {
  return (
    <button className="login btn" onClick={onLogin}>
      Login
    </button>
  );
};
export default Login;
