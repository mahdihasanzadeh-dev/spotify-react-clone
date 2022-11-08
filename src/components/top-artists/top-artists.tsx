import type{ ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import type{ Track } from '@components/song-card/song-card-interface';
import type { ITopArtistsProperties } from './top-artists-interface';
import 'swiper/css';
import 'swiper/css/free-mode';

export function TopArtists({ tracks }: ITopArtistsProperties):ReactElement {
  return (
    <div className="w-full flex flex-col mt-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-white font-bold text-2xl">Top Artists</h2>
        <Link to="/top-artists">
          <p className="text-gray-300 text-base cursor-pointer">see more</p>
        </Link>
      </div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={15}
        freeMode
        centeredSlides
        centeredSlidesBounds
        modules={[FreeMode]}
        className="mt-4"
      >
        {tracks.slice(0, 10).map((song: Track) => (
          <SwiperSlide
            key={song.key}
            style={{ width: '25%', height: 'auto' }}
            className="shadow-lg rounded-full animate-slideright"
          >
            <Link to={`/artists/${song.artists[0].adamid}`}>
              <img src={song.images.background} alt={song.artists[0].id} className="rounded-full w-full object-cover" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
