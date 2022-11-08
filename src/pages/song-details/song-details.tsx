/* eslint-disable react/no-array-index-key */
import type { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '@components/index';
import { useGetSongDetailsQuery } from '@redux/services/shazm-core';
import type { IRootState } from '@redux/store-interface';

export function SongDetails(): ReactElement {
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state: IRootState) => state.player);
  const { data, isFetching, error } = useGetSongDetailsQuery(songid);

  if (isFetching) return <Loader title="Loading song details ..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col mt-10 lg:mt-0">
      <DetailsHeader songData={data} />
      <div className="mb-10 mt-5">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {data?.sections[1].type === 'LYRICS'
            ? data.sections[1].text.map((line : string, i: number) => (<p key={i} className="text-gray-300 text-base my-1">{line}</p>))
            : <p className="text-gray-300 text-base my-1">Sorry, No Lyrics Found</p>}
        </div>
      </div>
      {/* <RelatedSongs
            artistId={data.artists[0].adamid}
      /> */}
      <RelatedSongs
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
}
