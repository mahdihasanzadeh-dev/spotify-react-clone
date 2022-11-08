import type { Track } from '@components/song-card/song-card-interface';

export interface ITopChartCardProperties {
    song: Track;
    i: number;
    isPlaying: boolean;
    activeSong: Track;
    handlePauseClick: () => void;
    handlePlayClick: () => void;
}
