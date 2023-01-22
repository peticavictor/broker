import { BrowserRouter } from "react-router-dom";
import Context from "./components/Context";
import './App.css';

import Contacts from "./components/Contacts/Contacts";
import Main from "./components/Main/Main";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App" id='App'>
      <BrowserRouter>
        <Context >
          <Main />
          {/* <Services />
          <Contacts /> */}
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
