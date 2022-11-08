import type { Track } from '@components/song-card/song-card-interface';

export interface ISongBarProperties {
    song: Track;
    i: number;
    isPlaying:boolean;
    activeSong: Track;
    handlePauseClick: () => void,
    handlePlayClick: (song: Track, i: number) => void,
}
