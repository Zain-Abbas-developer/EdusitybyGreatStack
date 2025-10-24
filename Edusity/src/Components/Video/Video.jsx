import React, { useRef } from 'react'
import './Video.css'
import college_video from '../../assets/college-video-player.mp4'

const Video = ({ playState, setPlayState }) => {
    const player = useRef();

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false)
        }
    }

  return (
    <div className={`video-player ${playState ? "" : "hide"}` }ref={player} onClick={closePlayer}>
      <video src={college_video} autoPlay muted controls></video>
    </div>
  );
};

export default Video
