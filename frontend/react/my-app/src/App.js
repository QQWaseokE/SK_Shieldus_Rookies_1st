import logo from './logo.svg';
import './App.css';
// import { Fragment } from 'react';

function App() {
  const name = '홍길동x';

  return (
    <>
      { name === '홍길동' ? '환영합니다.' : '환영하지 않습니다.' }
    </>
  );
}

export default App;