import React, { useEffect, useRef, useState } from "react";
import frames from "./frames/*.png"

export function App() {
  let video = useRef<HTMLVideoElement>(null!);
  let [frame, setFrame] = useState<NodeRequire>(null!);

  useEffect(() => {
    let N = 3000;
    setInterval(() => {
      setFrame(frames[`0505-Taganka_EXT_Day_CAM-0${N}`]);
      if (N === 3750) N = 3000
      else N++
    }, 60)
  }, []);

  useEffect(() => {
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(stream => {
          video.current.srcObject = stream;
        })
        .catch(err0r => {
          console.log("Something went wrong!");
        });
    }
  }, []);

  return (
    <>
      <video
        autoPlay={true}
        style={{ ...baseStyle, background: "#666" }}
        ref={video}
      ></video>
      <img style={baseStyle} src={frame} />
    </>
  );
}

let baseStyle = {
  position: "absolute",
  width: "960px",
  height: "540px"
};
