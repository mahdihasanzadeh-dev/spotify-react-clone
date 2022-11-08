import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import type { IDetailsHeaderProperties } from './details-header-interface';

export function DetailsHeader({
  songData,
}: IDetailsHeaderProperties): ReactElement {
  const artist: string = songData.urlparams['{trackartist}'];
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28 rounded-bl-full rounded-tl-full" />
      <div className="absolute inset-0 flex items-center">
        <img
          alt="art"
          src={songData.images.coverart}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{artist}</p>

          <Link to={`/artists/${songData.artists[0].adamid}`}>
            <p className="text-base text-gray-400 mt-2">
              {songData.subtitle}
            </p>
          </Link>

          <p className="text-base text-gray-400 mt-2">
            {
             songData.genres.primary
            }
          </p>
        </div>
      </div>
    </div>
  );
}
