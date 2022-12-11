import { BrowserRouter } from "react-router-dom";
import Context from "./components/Context";
import Main from "./components/Main";
import './App.css';
import Contacts from "./components/Contacts";
import Import from "./components/Import";
import Export from "./components/Export";
import Transit from "./components/Transit";

function App() {
  return (
    <div className="App" id='App'>
      <BrowserRouter>
        <Context >
          <Main />
          <Import />
          <Export />
          <Transit />
          <Contacts />
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
