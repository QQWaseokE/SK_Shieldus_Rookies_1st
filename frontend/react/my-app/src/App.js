import logo from './logo.svg';
import './App.css';
// import { Fragment } from 'react';

function App() {
  const name = '홍길동';
  return (
    <>
      <div style={{backgroundColor: 'black', color: 'yellow', fontSize: 48, padding: '16px'}}>
        {name}
      </div>
    </>
  );
}

export default App;