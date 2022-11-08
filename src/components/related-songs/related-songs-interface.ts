/* eslint-disable @typescript-eslint/naming-convention */
import type { Track } from '@components/song-card/song-card-interface';

export interface IRelatedSongsProperties {
    artistId?: string;
    isPlaying: boolean;
    activeSong: Track,
    handlePlayClick: (song: Track, i: number) => void,
    handlePauseClick: () =>void
}
