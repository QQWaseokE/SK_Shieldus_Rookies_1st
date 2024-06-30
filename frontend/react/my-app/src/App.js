import logo from './logo.svg';
import './App.css';
// import { Fragment } from 'react';

function Name() {
  const name = undefined;

  return name || 'undefined 입니다.';	
}

function App() {
  return (
    <>
      <Name />
    </>
  );
}

export default App;