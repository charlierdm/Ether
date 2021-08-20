import "../App.css";
import { useEffect } from "react";

export const QwertyButtons = ({ keyPress, setKeyPress }) => {

  useEffect(() => {
    document.addEventListener('keydown', e => {
     setKeyPress(e.key);
    })

    document.addEventListener('keyup', e => {
      if (e.key) {
        setKeyPress("")
      }
    })
  })

  return (
    <div className="qwerty-buttons">
      <button className={keyPress === 'a' ? "press-a" : ""}>A</button>
      <button className={keyPress === 's' ? "press-s" : ""}>S</button>
      <button className={keyPress === 'd' ? "press-d" : ""}>D</button>
    </div>
  );
};
