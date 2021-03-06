import logo from './logo.svg';
import './App.css';
import Accordion from 'components/accordion/Accordion';
import Editable from 'components/editable/Editable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <Accordion />
        <Editable />
      </header>
    </div>
  );
}

export default App;
