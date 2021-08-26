import "../App.css";
import { useEffect } from "react";
import { Howl } from "howler";
import qwertyAudioA from './qwertyAudioA.mp3';
import qwertyAudioD from './qwertyAudioD.mp3';
import qwertyAudioS from './qwertyAudioS.mp3';

export const QwertyButtons = ({ keyPress, setKeyPress }) => {

  const audioA = new Howl({
    src: [qwertyAudioA],
    volume: 0.8
  });

  const audioS = new Howl({
    src: [qwertyAudioS],
    volume: 1
  });

  const audioD = new Howl({
    src: [qwertyAudioD],
    volume: 1.1
  });  
  
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      setKeyPress(e.key);
      console.log(e.key);
      if (e.key === "a" && !audioA.playing()) {
        audioA.play();
      }
      if (e.key === "s" && !audioS.playing()) {
        audioS.play();
      }
      if (e.key === "d" && !audioD.playing()) {
        audioD.play();
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.key) {
        setKeyPress("");
      }
      if (e.key === "a") return audioA.stop();
      if (e.key === "s") return audioS.stop();
      if (e.key === "d") return audioD.stop();
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
