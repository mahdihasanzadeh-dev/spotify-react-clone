/* eslint-disable @typescript-eslint/naming-convention */
import type { ReactElement } from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import type { IControlsProperties } from './controls-interface';

export function Controls({
  isPlaying,
  isRepeat,
  handleRepeat,
  isShuffle,
  handleShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}: IControlsProperties): ReactElement {
  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
      <BsArrowRepeat size={20} color={isRepeat ? 'red' : 'white'} onClick={handleRepeat} className="hidden sm:block cursor-pointer" />
      {currentSongs.length && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
      {isPlaying ? (
        <BsFillPauseFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      ) : (
        <BsFillPlayFill size={45} color="#FFF" onClick={handlePlayPause} className="cursor-pointer" />
      )}
      {currentSongs.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
      <BsShuffle size={20} color={isShuffle ? 'red' : 'white'} onClick={handleShuffle} className="hidden sm:block cursor-pointer" />
    </div>
  );
}
