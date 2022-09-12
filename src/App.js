import { BrowserRouter } from "react-router-dom";
import Context from "./components/Context";
import Main from "./components/Main";
import Services from "./components/Services";
import './App.css';
import Contacts from "./components/Contacts";
import Scroll from "./components/SmoothScroll";

function App() {
  return (
    <div className="App" id='App'>
      <BrowserRouter>
        <Context >
          <Main />
          <Services />
          <Contacts />
        </Context>
        <Scroll />
      </BrowserRouter>
    </div>
  );
}

export default App;
