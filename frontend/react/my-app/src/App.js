import { Component, useState } from 'react';

const Parent = () => {
  const [ no, setNo ] = useState(0);
  return (
    <>
      <h1>입력 값: {no}</h1>
      <input type="number" value={no} onChange={e => setNo(e.target.value)}/>
      <ChildA no={no} />
      <ChildB no={no} />    
    </>
  )
};

const ChildA = ({no}) => {
  return (
    <>
      <h1>2를 곱한 값: {no * 2}</h1>
    </>
  );
};

const ChildB = ({no}) => {
  return (
    <>
      <h1>3를 곱한 값: {no * 3 }</h1>
    </>
  );
};

class App extends Component {
  render() {
    return (
      <>
        <Parent />          
      </>
    );
  }
}

export default App;
