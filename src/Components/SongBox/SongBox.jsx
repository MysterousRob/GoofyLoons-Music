import { UpdateIcon } from "@radix-ui/react-icons";
import React, { useState, useRef } from "react";

const SongBox = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const playSong = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateTime = () => {
    const currentProgess =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(currentProgess);
  };

  return (
    <div className="border border-grey-300 p-4 m-4 max-w-xs">
      <div className="font-bold text-lg mb-2">
        <h1>Song Name</h1>
      </div>
      <div className="text-grey-600 mb-4">
        <h1>Artist Name</h1>
      </div>
      <div className="realtive">
        <div
          className="h-1 bg-grey-200 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <audio ref={audioRef} onTimeUpdate={updateTime} onEnded={() => setIsPlaying(false)}>
        <source src="" type="audio/mpeg" />
        Your Browser Does not Support the Audio Elemet
      </audio>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onCLick={playSong}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default SongBox;
