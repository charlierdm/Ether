import "./App.css";
import { useState } from "react";
import { QwertyButtons } from "./Components/QwertyButtons";

const App = () => {
  const [keyPress, setKeyPress] = useState('');

  return (
    <div className="app-container">
      <QwertyButtons keyPress={keyPress} setKeyPress={setKeyPress} />
    </div>
  );
}

export default App;
