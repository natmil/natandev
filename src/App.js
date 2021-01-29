import './App.css';
import "nes.css/css/nes.min.css";

import Toolbar from "./components/Toolbar/Toolbar";
import Homepage from './containers/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Toolbar />
      <Homepage />
    </div>
  );
}

export default App;
