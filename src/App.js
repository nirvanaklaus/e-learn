import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './pages/signIn/signIn';
import SignUp from './pages/signup/signUp';

function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}
      <SignUp/>
    </div>
  );
}

export default App;
