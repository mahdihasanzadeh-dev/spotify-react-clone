import type { Track } from '@components/song-card/song-card-interface';
import { nextSong, prevSong, playPause } from '@redux/features/player-slice';
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
  currentSongs: Track[],
  dispatch: Dispatch<AnyAction>,
) {
  function handlePlayPause():void {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  }

  function handleNextSong():void {
    dispatch(playPause(false));
    const { isShuffle } = state;

    if (!isShuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
    }
  }

  function handlePrevSong():void {
    const { isShuffle } = state;

    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (isShuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  }

  function handleShuffle():void {
    const { isShuffle } = state;

    setState({
      ...state,
      isShuffle: !isShuffle,
    });
  }

  function handleRepeat():void {
    const { isRepeat } = state;

    setState({
      ...state,
      isRepeat: !isRepeat,
    });
  }

  function handleDuration(event: { target: { duration: number; }; }):void {
    setState({
      ...state,
      duration: event.target.duration,
    });
  }

  function increaseSeekTime(value:number):void {
    const { seekTime } = state;

    setState({
      ...state,
      seekTime: seekTime + value,
    });
  }

  function decreaseSeekTime(value:number):void {
    const { seekTime } = state;

    setState({
      ...state,
      seekTime: seekTime - value,
    });
  }

  function handleSeekTime(event: { target: { value: number; }; }) {
    setState({
      ...state,
      seekTime: Math.floor(event.target.value),
    });
  }

  function handleAppTime(event: { target: { currentTime: number; }; }):void {
    setState({
      ...state,
      appTime: event.target.currentTime,
    });
  }

  function handleVolume(event: { target: { value: number; }; }):void {
    setState({
      ...state,
      volume: event.target.value,
    });
  }

  function setVolume(value:number):void {
    setState({
      ...state,
      volume: value,
    });
  }

  return {
    handlePlayPause,
    handleNextSong,
    handlePrevSong,
    handleShuffle,
    handleRepeat,
    handleDuration,
    increaseSeekTime,
    decreaseSeekTime,
    handleSeekTime,
    handleAppTime,
    handleVolume,
    setVolume,
  };
}
