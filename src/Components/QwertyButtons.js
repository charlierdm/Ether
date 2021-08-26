import "../App.css";
import { useEffect } from "react";
import { Howl } from "howler";
import qwertyAudioA from "./qwertyAudioA.mp3";
import qwertyAudioD from "./qwertyAudioD.mp3";
import qwertyAudioS from "./qwertyAudioS.mp3";

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
    volume: 1.1,
  });

  const selectSampleToPlay = (key) => {
    if (key === "a" && !audioA.playing()) return audioA.play();
    if (key === "s" && !audioS.playing()) return audioS.play();
    if (key === "d" && !audioD.playing()) return audioD.play();
  };

  const sampleFadeAndStop = (key) => {
    if (key === "a") {
      audioA.fade(0.8, 0, 1500);
      setTimeout(() => {
        audioA.stop();
        audioA.fade(0, 0.8, 0);
      }, 1500);
    }
    if (key === "s") {
      audioS.fade(0.8, 0, 1500);
      setTimeout(() => {
        audioS.stop();
        audioS.fade(0, 0.8, 0);
      }, 1500);
    }
    if (key === "d") {
      audioD.fade(0.8, 0, 1500);
      setTimeout(() => {
        audioD.stop();
        audioD.fade(0, 0.8, 0);
      }, 1500);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      setKeyPress(e.key);
      selectSampleToPlay(e.key);
    });

    document.addEventListener("keyup", (e) => {
      if (e.key) {
        setKeyPress("");
      }
      sampleFadeAndStop(e.key);
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
