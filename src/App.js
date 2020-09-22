import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/inputField/inputField'

function App() {
  return (
    <div className="App">
      <InputField name="email" placeholder="Enter valid email" type="email" image="https://upload.wikimedia.org/wikipedia/en/e/e0/WPVG_icon_2016.svg" />
    </div>
  );
}

export default App;
