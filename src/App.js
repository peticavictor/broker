import { BrowserRouter } from "react-router-dom";
import Context from "./components/Context";
import './App.css';

import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App" id='App'>
      <BrowserRouter>
        <Context >
          <Main />
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
