import { useState, useEffect } from 'react';
import type { ReactElement, Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextSong, prevSong, playPause } from '@redux/features/playerSlice';
import type { AnyAction } from '@reduxjs/toolkit';
import { Controls } from './controls/controls';
import { Player } from './player/player';
import { Seekbar } from './seekbar/seekbar';
import { Track } from './track/track';
import { VolumeBar } from './volume-bar/volume-bar';
import type { IMusicPlayerState } from './music-player-interface';
import { musicPlayerHelper } from './music-player-helper';

export function MusicPlayer(): ReactElement {
  const {
    activeSong,
    currentSongs,
    currentIndex,
    isActive,
    isPlaying,
  } = useSelector((state) => state.player);

  const [state, setState] = useState<IMusicPlayerState>({
    duration: 0,
    seekTime: 0,
    appTime: 0,
    volume: 0.3,
    isRepeat: false,
    isShuffle: false,
  });

  const helper = musicPlayerHelper(
    state,
    setState,
    isPlaying,
    isActive,
    currentIndex,
    currentSongs,
    dispatch,
  );

  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch: Dispatch<AnyAction> = useDispatch();

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true));
  }, [currentIndex]);


  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />
      <div className="flex-1 flex flex-col items-center justify-center">
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={helper.handlePlayPause}
          handlePrevSong={helper.handlePrevSong}
          handleNextSong={helper.handleNextSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={helper.handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume} />
    </div>
  );
}
