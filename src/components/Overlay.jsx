import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";
import data from '../data/data.json'
import { useState } from "react";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  const [homepage, setHomepage] = useState(false);
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <img src={data.logo} className="logo" alt=''/>
          <p className="intro__scroll">Scroll to begin the journey</p>
          <button
            className="explore "
            onClick={() => {
              setPlay(true);
            }}
          >
            Explore
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Wish you had a great flight with us...</p>
        <div className="contact__grid">
        <a href='#homepage'><button className="knowMore__button github" >Github</button></a>
        <a href='#homepage'><button className="knowMore__button linkedin" >Linkedin</button></a>
        <a href='#homepage'><button className="knowMore__button twitter" >Twitter</button></a>
        <a href='#homepage'><button className="knowMore__button portfolio" >Portfolio</button></a>
        </div>
      </div>
    </div>
  );
};