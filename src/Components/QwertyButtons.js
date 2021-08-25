import "../App.css";
import { useEffect } from "react";
import { Howl } from "howler";
import qwertyAudioA from './qwertyAudioA.mp3';
import qwertyAudioD from './qwertyAudioD.mp3';
import qwertyAudioS from './qwertyAudioS.mp3';

export const QwertyButtons = ({ keyPress, setKeyPress }) => {

  const audioA = new Howl({
    src: [qwertyAudioA],
    volume: 0.3
  });

  const audioS = new Howl({
    src: [qwertyAudioS],
    volume: 0.3
  });

  const audioD = new Howl({
    src: [qwertyAudioD],
    volume: 0.7
  });  
  
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      setKeyPress(e.key);
      audioD.play();
    });

    document.addEventListener("keyup", (e) => {
      if (e.key) {
        setKeyPress("");
        audioD.fade(1, 0, 1500);
      }
    });
  }, []);

  return (
    <div className="qwerty-buttons">
      <button className={keyPress === "a" ? "press-a" : ""}>A</button>
      <button className={keyPress === "s" ? "press-s" : ""}>S</button>
      <button className={keyPress === "d" ? "press-d" : ""}>D</button>
    </div>
  );
};
