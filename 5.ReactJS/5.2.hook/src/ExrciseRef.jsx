import React, { useRef, useState, useEffect } from "react";
import Video from "./components/Video.jsx";

export default function ExrciseRef() {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <div className="text-center mt-10 flex flex-col items-center gap-4">
      <Video ref={videoRef} />
      <div className="flex gap-2 justify-between w-[500px]">
        <button
          onClick={handlePlay}
          className="bg-primary-color text-white px-4 py-2 rounded-md border-secondary-color hover:bg-secondary-color hover:text-white border border-primary-color"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <span>{formatTime(currentTime)}</span>
      </div>
    </div>
  );
}
