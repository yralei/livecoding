import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// input: props(obj)
// output: JSX

// algo
// 1. show login by default
// 2. after login click - hide login & show Spinner for 2 sec
// 3. after 2 seconds - hide Spinner for 2 sec
// 4. after Logout click - hide Logout & show Login
// 5.
class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isProcessing: false,
  };

  loginHandler = () => {
    this.setState({
      isProcessing: true,
    });
    setTimeout(() => {
      this.setState({
        isProcessing: false,
        isLoggedIn: true,
      });
    }, 2000);
  };

  logoutHandler = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const { isLoggedIn, isProcessing } = this.state;

    if (isProcessing) {
      return <Spinner />;
    }
    return isLoggedIn ? (
      <Logout onLogin={this.logoutHandler} />
    ) : (
      <Login onLogin={this.loginHandler} />
    );

    //   if (isLoggedIn) {
    //     return <Logout onLogin={this.logoutHandler} />;
    //   }
    //   return <Login onLogin={this.loginHandler} />;
    // }
  }
}

export default Auth;

// REACT APPROACH
// 0. make a layout +++
// 1. split on components+++---
// 2. static version in react+++
// 3. declare state and props+++
// 4. write logic
