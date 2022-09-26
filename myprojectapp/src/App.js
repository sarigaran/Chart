import logo from './logo.svg';
import './App.css';
import Card from './components/card/card';
import Spline from './components/chart/chart';
import Barchart2 from './components/chart/chart2';
import Side from './components/sidebar/sidebar';
import BasicGrid from './components/card/card2';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           Learn React
         
        </a>
       
        </div>
        <h1>React</h1>
       
      <Card/>
      <Spline/>
      <Barchart2/>
      <Side/>
      <BasicGrid/>
      
    </div>

  );
}

export default App;
