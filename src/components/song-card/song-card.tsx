import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PlayPause } from '@components/index';
import { setActiveSong, playPause } from '@redux/features/player-slice';
import type { ReactElement } from 'react';
import type { Dispatch, AnyAction } from '@reduxjs/toolkit';
import type { ISongCardProperties } from './song-card-interface';

export function SongCard({
  song,
  i,
  isPlaying,
  activeSong,
  data,
}: ISongCardProperties): ReactElement {
  const dispatch:Dispatch<AnyAction> = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-50 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="w-full relative h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img src={song.images.coverart} alt={song.title} />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song.artists.length > 0 ? `/artists/${song.artists[0].adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
}
