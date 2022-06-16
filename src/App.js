import logo from './logo.svg';
import './App.css';
import Accordion from 'components/accordion/Accordion';
import Editable from 'components/editable/Editable';
import AccordionContainer from 'components/accordion/AccordionContainer';
import AccordionWContext from 'components/accordion/AccordionWithContext';
import DemoCallbackHook from 'hooks/useCallbackDemo';

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
        {/* <Accordion />
        <Editable /> */}

        {/* <AccordionContainer header={'Click to display'}>
          <div>this is children</div>
        </AccordionContainer> */}

        {/* <AccordionWContext header={'Accordion 2 : Click to Display'}>
          <div>this is children 2</div>

        </AccordionWContext> */}

        <DemoCallbackHook />


      </header>
    </div>
  );
}

export default App;
