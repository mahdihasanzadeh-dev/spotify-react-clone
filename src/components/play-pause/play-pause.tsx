import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import type { ReactElement } from 'react';
import type { IPlayPauseProperties } from './play-pause-interface';

export function PlayPause({
  song,
  isPlaying,
  activeSong,
  handlePause,
  handlePlay,
}:IPlayPauseProperties): ReactElement {
  return (
    isPlaying && activeSong.title === song.title
      ? (
        <FaPauseCircle
          size={35}
          className="text-gray-300"
          onClick={handlePause}
        />
      )
      : (
        <FaPlayCircle
          size={35}
          className="text-gray-300"
          onClick={handlePlay}
        />
      )
  );
}
