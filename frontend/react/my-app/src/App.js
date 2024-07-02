import { Component, useState } from 'react';

const Parent = () => {
  const [color, setColor] = useState('black');
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 style={{color}}> 카운터 : {count} </h1>
      <ChildA setColor={setColor} />
      <ChildB setCount={setCount} count={count} />
    </>
  )
};

const ChildA = ({setColor}) => {
  return (
    <>
        <button onClick={() => setColor('red')}>붉은색</button>
        <button onClick={() => setColor('blue')}>파란색</button>
    </>
  );
};

const ChildB = ({setCount, count}) => {
  return (
    <>
        <button onClick={() => setCount(count + 1)}>하나증가</button>
        <button onClick={() => setCount(count - 1)}>하나감소</button>
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