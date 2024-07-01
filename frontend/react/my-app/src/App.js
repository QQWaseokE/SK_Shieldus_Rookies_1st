import './App.css';

class Clock extends Component {
  state = {
    now: new Date().toLocaleTimeString()
  };
  
  render() {
    setInterval(() => {
      this.setState({ now: new Date().toLocaleTimeString() });
    }, 1000);
  
    return (
      <>
        <h1>현재 시간 : {this.state.now}</h1>
      </>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Clock />
      </>
    );  
  }
}

export default App;