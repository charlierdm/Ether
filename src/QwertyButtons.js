import "./App.css";
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
    volume: 0.9,
  });

  const audioD = new Howl({
    src: [qwertyAudioD],
    volume: 0.7,
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

  const handlePlay = (e) => {
    setKeyPress(e.key);
    selectSampleToPlay(e.key);
  };

  const handlePlayTouch = (e) => {
    setKeyPress(e.target.name);
    selectSampleToPlay(e.target.name);
  };

  const handleStop = (e) => {
    setKeyPress("fade-bg-back");
    sampleFadeAndStop(e.key);
  };

  const handleStopTouch = (e) => {
    setKeyPress("fade-bg-back");
    sampleFadeAndStop(e.target.name);
  };

  const handleMouseDown = (e) => {
    if (
      e.target.name === "a" ||
      e.target.name === "s" ||
      e.target.name === "d"
    ) {
      setKeyPress(e.target.name);
      selectSampleToPlay(e.target.name);
    }
  };

  const handleMouseUp = (e) => {
    if (
      e.target.name === "a" ||
      e.target.name === "s" ||
      e.target.name === "d"
    ) {
      setKeyPress("fade-bg-back");
      sampleFadeAndStop(e.target.name);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => handlePlay(e));
    document.addEventListener("keyup", (e) => handleStop(e));
    document.addEventListener("mousedown", (e) => handleMouseDown(e));
    document.addEventListener("mouseup", (e) => handleMouseUp(e));
  }, []);

  return (
    <div className="qwerty-buttons">
      <button className={keyPress === "a" ? "press-a" : ""} name="a" onTouchStart={(e) => handlePlayTouch(e)} onTouchEnd={(e) => handleStopTouch(e)}>
        A
      </button>
      <button className={keyPress === "s" ? "press-s" : ""} name="s" onTouchStart={(e) => handlePlayTouch(e)} onTouchEnd={(e) => handleStopTouch(e)}>
        S
      </button>
      <button className={keyPress === "d" ? "press-d" : ""} name="d" onTouchStart={(e) => handlePlayTouch(e)} onTouchEnd={(e) => handleStopTouch(e)}>
        D
      </button>
    </div>
  );
};
