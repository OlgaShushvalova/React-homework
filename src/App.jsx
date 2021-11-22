import logo from "./logo.svg";
import "./App.css";
import { Message } from "./Message";
import { MessageList } from "./Components/MessageList";

const name = "frend";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Message name={name} />
        <MessageList />
      </header>
    </div>
  );
}

export default App;
