import "../App.css";
import { useEffect } from "react";
import { Howl } from "howler";
import qwertyAudioA from "./qwertyA.mp3";
import qwertyAudioD from "./qwertyD.mp3";
import qwertyAudioS from "./qwertyS.mp3";

export const QwertyButtons = ({ keyPress, setKeyPress }) => {
  const audioA = new Howl({
    src: [qwertyAudioA],
    volume: 0.8,
  });

  const audioS = new Howl({
    src: [qwertyAudioS],
    volume: 0.8,
  });

  const audioD = new Howl({
    src: [qwertyAudioD],
    volume: 0.8,
  });

  const selectSampleToPlay = (key) => {
    if (key.toLowerCase() === "a" && !audioA.playing()) return audioA.play();
    if (key.toLowerCase() === "s" && !audioS.playing()) return audioS.play();
    if (key.toLowerCase() === "d" && !audioD.playing()) return audioD.play();
  };

  const sampleFadeAndStop = (key) => {
    if (key.toLowerCase() === "a") {
      audioA.fade(0.8, 0, 1500);
      setTimeout(() => {
        audioA.stop();
        audioA.fade(0, 0.8, 0);
      }, 1500);
    }
    if (key.toLowerCase() === "s") {
      audioS.fade(0.8, 0, 1500);
      setTimeout(() => {
        audioS.stop();
        audioS.fade(0, 0.8, 0);
      }, 1500);
    }
    if (key.toLowerCase() === "d") {
      audioD.fade(0.8, 0, 1500);
      setTimeout(() => {
        audioD.stop();
        audioD.fade(0, 0.8, 0);
      }, 1500);
    }
  };

  const handlePlay = (e) => {
    setKeyPress(e.key.toLowerCase());
    selectSampleToPlay(e.key.toLowerCase());
  };

  const handleStop = (e) => {
    if (e.key.toLowerCase()) {
      setKeyPress("");
    }
    sampleFadeAndStop(e.key.toLowerCase());
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => handlePlay(e));
    document.addEventListener("keyup", (e) => handleStop(e));
  }, []);

  return (
    <div className="qwerty-buttons">
      <button className={keyPress === "a" ? "press-a" : ""}>A</button>
      <button className={keyPress === "s" ? "press-s" : ""}>S</button>
      <button className={keyPress === "d" ? "press-d" : ""}>D</button>
    </div>
  );
};
