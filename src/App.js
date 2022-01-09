import logo from "./logo.svg";
import "./App.css";
import { FaGithub, FaFacebookF } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>V prdeli 2</p>
        <FaGithub /> work?
        <FaFacebookF /> work?
        <a>Learn React</a>
      </header>
    </div>
  );
}

export default App;
