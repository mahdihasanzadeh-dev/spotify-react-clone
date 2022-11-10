import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { PlayPause } from '@components/index';
import type { ITopChartCardProperties } from './top-chart-card-interface';

export function TopChartCard({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}: ITopChartCardProperties): ReactElement {
  return (
    <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
      <h3 className="font-bold text-base text-white mr-3">
        {i + 1}
        .
      </h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          src={song.images.coverart}
          alt={song.title}
          className="w-20 h-20 rounded-lg"
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link to={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">{song.title}</p>
          </Link>
          {/* <Link to={`/artists/${song.artists[0].adamid}`}>
            <p className=" text-base mt-1 text-gray-300">{song.title}</p>
          </Link> */}
          <p className=" text-base mt-1 text-gray-300">{song.title}</p>
        </div>
      </div>
      <PlayPause
        song={song}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
}
