import { nextSong, prevSong, playPause } from '@redux/features/playerSlice';
import type { AnyAction } from '@reduxjs/toolkit';
import type { ISetState } from 'common/common-interface';
import type { Dispatch } from 'react';
import type { IMusicPlayerState } from './music-player-interface';

export function musicPlayerHelper(
  state: IMusicPlayerState,
  setState: ISetState<IMusicPlayerState>,
  isPlaying: boolean,
  isActive: boolean,
  currentIndex: number,
  currentSongs: unknown,
  dispatch: Dispatch<AnyAction>,
) {
  function handlePlayPause() {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  }

  function handleNextSong() {
    dispatch(playPause(false));
    const { isShuffle } = state;

    if (!isShuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  }

  function handlePrevSong() {
    const { isShuffle } = state;

    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (isShuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  }

  return {
    handlePlayPause,
    handleNextSong,
    handlePrevSong,
  };
}
