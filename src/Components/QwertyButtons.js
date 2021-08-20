import "../App.css";

export const QwertyButtons = ({ keyPress }) => {
  return (
    <div className="qwerty-buttons">
      <button className={keyPress === 'a' ? "press-a" : ""}>A</button>
      <button className={keyPress === 's' ? "press-s" : ""}>S</button>
      <button className={keyPress === 'd' ? "press-d" : ""}>D</button>
    </div>
  );
};
