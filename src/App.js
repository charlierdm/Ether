import "./App.css";
import { useState } from "react";
import { QwertyButtons } from "./Components/QwertyButtons";
import { QwertyHandler } from "./Components/QwertyHandler";

const App = () => {
  const [key, setKey] = useState('');

  return (
    <div className="App-Container">
      <QwertyHandler />
      <QwertyButtons />
    </div>
  );
}

export default App;
