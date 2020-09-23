import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './pages/signIn/signIn';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}
      <Dashboard/>
    </div>
  );
}

export default App;
