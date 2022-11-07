import type { Track } from '@components/song-card/song-card-interface';

export interface IPlayerProperties {
    activeSong?: Track;
    isPlaying: boolean;
    volume: number;
    seekTime: number;
    onEnded: () => void;
    currentIndex?: number;
    onTimeUpdate: (event: { target: { currentTime: number; }; }) => void;
    onLoadedData: (event: { target: { duration: number; }; }) => void;
    isRepeat: boolean;
}
