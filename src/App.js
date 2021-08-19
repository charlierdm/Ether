import "./App.css";
import { QwertyA } from "./Components/QwertyA";
import { QwertyS } from "./Components/QwertyS";
import { QwertyD } from "./Components/QwertyD";

function App() {
  return (
    <div className="App-Container">
      <QwertyA />
      <QwertyS />
      <QwertyD />
    </div>
  );
}

export default App;
