import './App.css';
import TrafficLight from './TrafficLight';

function App() {
  const tlSize = 100;
  const tlColors = [ "red", "blue", "green", "yellow" ];

  return (
    <>
      <TrafficLight size={tlSize} colors={tlColors} />      
    </>
  );  
}

export default App;