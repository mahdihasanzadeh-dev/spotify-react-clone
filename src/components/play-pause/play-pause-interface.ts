import type { Track } from '@components/song-card/song-card-interface';

export interface IPlayPauseProperties {
  song: Track;
  isPlaying: boolean;
  activeSong: Track;
  handlePause: () =>void;
  handlePlay: ()=>void;
}
