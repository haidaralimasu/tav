import "./Video.css";
import React from "react";
import ReactPlayer from "react-player";

function Video() {
  return (
    <div className="Video">
      <div className="Video__title">
        You can see the Background <br />
        story of the Isekai here:
      </div>
      <ReactPlayer
        className="Video__placeholder"
        url="https://www.youtube.com/watch?v=wQ8PaVwcjaE&t=125s"
      />
    </div>
  );
}

export default Video;
