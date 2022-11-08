import { useGetSongRelatedQuery } from '@redux/services/shazm-core';
import { Error, Loader, SongBar } from '@components/index';
import type { ReactElement } from 'react';
import { setActiveSong, playPause, setCurrentSong } from '@redux/features/player-slice';
import { useDispatch } from 'react-redux';
import type { Track } from '@components/song-card/song-card-interface';
import type { IRelatedSongsProperties } from './related-songs-interface';

export function RelatedSongs({
  artistId = '40008598',
  isPlaying,
  activeSong,
}: IRelatedSongsProperties): ReactElement {
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetSongRelatedQuery(artistId);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song: Track, i: number) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
    dispatch(setCurrentSong(data.tracks));
  };

  if (isFetching) return <Loader title="Loading related songs ..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related songs:</h1>
      <div className="mt-6 w-full flex flex-col">
        {
          data?.tracks.map((track: Track, i: number) => (
            <SongBar
              key={track.key}
              song={track}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
          ))
        }
      </div>
    </div>
  );
}
