import "./App.css";
import { useState } from "react";
import { QwertyButtons } from "./QwertyButtons";

const App = () => {
  const [keyPress, setKeyPress] = useState("");

  return (
    <div className={keyPress ? `${keyPress}-app-container` : "app-container"}>
      <QwertyButtons keyPress={keyPress} setKeyPress={setKeyPress} />
    </div>
  );
};

export default App;
