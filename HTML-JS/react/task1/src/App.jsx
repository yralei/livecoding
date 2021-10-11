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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <>
        <Login />
        <Logout />
        <Spinner />
      </>
    );
  }
}

export default App;

// REACT APPROACH
// 0. make a layout +++
// 1. split on components+++---
// 2. static version in react+++
// 3. declare state and props+++
// 4. write logic
