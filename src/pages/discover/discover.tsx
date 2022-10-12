import type { ReactElement } from 'react';
import { SongCard } from '@components/index';
import { genres } from '@assets/constants';

export function Discover() : ReactElement {
  console.log(genres);

  return (
    <div className="flex flex-col">
      <SongCard />
    </div>
  );
}
