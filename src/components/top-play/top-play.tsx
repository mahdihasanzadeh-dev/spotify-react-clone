import { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { playPause, setActiveSong } from '@redux/features/player-slice';
import { useGetTopChartsQuery } from '@redux/services/shazm-core';
import type { IRootState } from '@redux/store-interface';
import type{ Track } from '@components/song-card/song-card-interface';
import { TopChartCard } from '@components/top-chart-card/top-chart-card';
import { TopArtists } from '@components/top-artists/top-artists';

export function TopPlay(): ReactElement {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state: IRootState) => state.player);
  const { data } = useGetTopChartsQuery('');
  const divRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: 'smooth' });
  });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song: Track, i: number) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[550px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        {
          (Boolean(data)) && (
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-white font-bold text-2xl">Top Charts</h2>
              {/* <Link to="/top-charts">
                <p className="text-gray-300 text-base cursor-pointer">see more</p>
              </Link> */}
            </div>
          )
        }

        <div className="mt-4 flex flex-col gap-1">
          {data?.tracks?.slice(0, 5).map((song: Track, i: number) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>
      {(Boolean(data)) && <TopArtists tracks={data.tracks} />}
    </div>
  );
}
