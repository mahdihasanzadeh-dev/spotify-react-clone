import { Language } from '@common/common-enum';
import { Loader, Error, SongCard } from '@components/index';
import { SEO } from '@components/seo/seo';
import { useParams } from 'react-router-dom';
import { useGetSongBySearchQuery } from '@redux/services/shazm-core';
import type { Track } from '@components/song-card/song-card-interface';
import type { IRootState } from '@redux/store-interface';
import type { ReactElement } from 'react';
import { useSelector } from 'react-redux';

export function Search(): ReactElement {
  const { activeSong, isPlaying } = useSelector((state: IRootState) => state.player);
  const { searchTerm } = useParams();
  const { data, isFetching, error } = useGetSongBySearchQuery(searchTerm);

  if (isFetching) return <Loader title="Loading related songs ..." />;
  if (error) return <Error />;

  return (
    <>
      <SEO
        pageTitle="SpotifyClone-Search"
        description="spotify clone with react, typescript, tailwind"
        keywords={['spotify', 'clone', 'reactjs', 'typescript', 'tailwind']}
        language={Language.EN_US}
      />
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Search Results</h2>
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
          {
            data?.tracks?.hits?.map((song: {track: Track}, i: number) => (
              <SongCard
                key={song.track.key}
                song={song.track}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data.tracks.hits}
              />
            ))
        }
        </div>
      </div>
    </>
  );
}
