import { useSelector } from 'react-redux';
import { logger } from '@common/common-function';
import { genres } from '@assets/constants';
import { Loader, SongCard } from '@components/index';
import { useGetTopChartsQuery } from '@redux/services/shazm-core';
import { Error } from '@components/error/error';
import type { ReactElement } from 'react';
import type { Track } from '@components/song-card/song-card-interface';
import type { IRootState } from '@redux/store-interface';

export function Discover() : ReactElement {
  const genreTitle = 'Pop';
  const { activeSong, isPlaying } = useSelector((state: IRootState) => state.player);

  const { data, error, isFetching } = useGetTopChartsQuery('');

  if (isFetching) return <Loader title="Loading songs ..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover
          {' '}
          {genreTitle}
        </h2>
        <select
          onChange={() => { logger('df'); }}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-nonesm:mt-0 mt-5"
        >
          {
            genres.map((gener) => {
              const { title, value } = gener;
              return (
                <option key={value} value={value}>{title}</option>
              );
            })
          }
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {
            data?.tracks?.map((song: Track, i: number) => (
              <SongCard
                key={song.key}
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data.tracks}
              />
            ))
        }
      </div>
    </div>
  );
}
