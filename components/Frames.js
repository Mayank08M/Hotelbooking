import React from "react";
import styles from '../styles/Frames.module.css'
import Nearby from "../public/Nearby.svg";
import Mumbai from "../public/Mumbai.svg";
import Gujrat from "../public/Gujrat.svg";
import Pune from "../public/Pune.svg";

const Frames = () => {
  return (
    <div className={styles.framescontainer}>
      <div className={styles.frames}>
        <div className={styles.frame}>
          <div style={{backgroundColor:"#ff6803"}} className={styles.ellipseFrames}>
            <img
              style={{ width: "50%", height: "50%" }}
              src={Nearby.src}
              alt="Nearby logo"
            />
          </div>
          <div className={styles.frameTitle}>
            <p>Nearby</p>
          </div>
        </div>
        <div className={styles.frame}>
          <div className={styles.ellipseFrames}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={Mumbai.src}
              alt="Mumbai"
            />
          </div>
          <div className={styles.frameTitle}>
            <p>Mumbai</p>
          </div>
        </div>
        <div className={styles.frame}>
          <div className={styles.ellipseFrames}><img
              style={{ width: "100%", height: "100%" }}
              src={Gujrat.src}
              alt="Gujrat"
            /></div>
          <div className={styles.frameTitle}>
            <p>Gujarat</p>
          </div>
        </div>
        <div className={styles.frame}>
          <div className={styles.ellipseFrames}><img
              style={{ width: "100%", height: "100%" }}
              src={Pune.src}
              alt="Pune"
            /></div>
          <div className={styles.frameTitle}>
            <p>Pune</p>
          </div>
        </div>
        <div className={styles.frame}>
          <div className={styles.ellipseFrames}><img
              style={{ width: "100%", height: "100%" }}
              src={Mumbai.src}
              alt="Mumbai"
            /></div>
          <div className={styles.frameTitle}>
            <p>City 4</p>
          </div>
        </div>
        <div className={styles.frame}>
          <div className={styles.ellipseFrames}><img
              style={{ width: "100%", height: "100%" }}
              src={Gujrat.src}
              alt="Gujrat"
            /></div>
          <div className={styles.frameTitle}>
            <p>City 5</p>
          </div>
        </div>
        <div className={styles.frame}>
          <div className={styles.ellipseFrames}><img
              style={{ width: "100%", height: "100%" }}
              src={Pune.src}
              alt="Pune"
            /></div>
          <div className={styles.frameTitle}>
            <p>City 6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frames;