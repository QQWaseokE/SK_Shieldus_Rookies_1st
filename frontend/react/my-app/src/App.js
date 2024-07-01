import './App.css';
import {useState} from 'react';

function Clock() {
  const [now,setNow] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setNow(new Date().toLocaleTimeString());
  },1000);
  return (
    <>
      <h1>현재 시간 : { now }</h1>
    </>
  );
}

function App() {
  return (
    <>
      <Clock />
    </>
  );  
}

export default App;
