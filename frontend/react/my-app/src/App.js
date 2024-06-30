import './App.css';
import MyComponentClass from './MyComponentClass';
import MyComponentFunction from './MyComponentFunction';

function App() {
  return (
    <>
      <MyComponentClass>
        <i>어떤 내용</i>
      </MyComponentClass>
      <hr/>
      <MyComponentFunction>
        <i>또 어떤 내용</i>
      </MyComponentFunction>
    </>
  );  
}

export default App;
