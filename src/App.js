import "./App.css";
import { useState } from "react";
import { QwertyButtons } from "./Components/QwertyButtons";
import { QwertyHandler } from "./Components/QwertyHandler";

const App = () => {
  const [keyPress, setKeyPress] = useState('');

  console.log(keyPress);

  return (
    <div className="app-container">
      <QwertyHandler setKeyPress={setKeyPress} />
      <QwertyButtons keyPress={keyPress} />
    </div>
  );
}

export default App;
