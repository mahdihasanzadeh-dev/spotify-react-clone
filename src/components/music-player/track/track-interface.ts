import type { Track } from '@components/song-card/song-card-interface';

export interface ITrackProperties {
  isPlaying: boolean,
  isActive: boolean,
  activeSong: Track | null,
}
