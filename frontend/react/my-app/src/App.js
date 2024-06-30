import logo from './logo.svg';
import './App.css';
// import { Fragment } from 'react';

function App() {
  const name = '홍길동';
  const number = 2;

  return (
    <>
      <h1>안녕, {name}</h1>   
      <h2>{number + 2}</h2>
    </>
  );
}

export default App;
