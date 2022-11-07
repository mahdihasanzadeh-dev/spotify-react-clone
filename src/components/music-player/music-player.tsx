/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { useState, useEffect } from 'react';
import type { ReactElement, Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playPause } from '@redux/features/player-slice';
import type { AnyAction } from '@reduxjs/toolkit';
import type { IRootState } from '@redux/store-interface';
import { Controls } from './controls/controls';
import { Player } from './player/player';
import { Seekbar } from './seekbar/seekbar';
import { Track } from './track/track';
import { VolumeBar } from './volume-bar/volume-bar';
import type { IMusicPlayerState } from './music-player-interface';
import { musicPlayerHelper } from './music-player-helper';

export function MusicPlayer(): ReactElement {
  const dispatch: Dispatch<AnyAction> = useDispatch();

  const {
    activeSong,
    currentSongs,
    currentIndex,
    isActive,
    isPlaying,
  } = useSelector((state: IRootState) => state.player);

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

  const { isShuffle, isRepeat, duration, seekTime, appTime, volume } = state;

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
          isRepeat={isRepeat}
          handleRepeat={helper.handleRepeat}
          isShuffle={isShuffle}
          handleShuffle={helper.handleShuffle}
          currentSongs={currentSongs}
          handlePlayPause={helper.handlePlayPause}
          handlePrevSong={helper.handlePrevSong}
          handleNextSong={helper.handleNextSong}
        />
        <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={helper.handleSeekTime}
          decreaseSeekTime={helper.decreaseSeekTime}
          increaseSeekTime={helper.increaseSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          isRepeat={isRepeat}
          currentIndex={currentIndex}
          onEnded={helper.handleNextSong}
          onTimeUpdate={helper.handleAppTime}
          onLoadedData={helper.handleDuration}
        />
      </div>
      <VolumeBar value={volume} min="0" max="1" onChange={helper.handleVolume} setVolume={helper.setVolume} />
    </div>
  );
}
