import type { Track } from '@components/song-card/song-card-interface';

export interface IPlayerSliceState {
    currentSongs: Track[];
    currentIndex: number;
    isActive: boolean;
    isPlaying: boolean;
    activeSong: Track,
    genreListId: string,
}
