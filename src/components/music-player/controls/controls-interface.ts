import type { Track } from '@components/song-card/song-card-interface';

/* eslint-disable @typescript-eslint/naming-convention */
export interface IControlsProperties {
    isPlaying: boolean;
    isActive: boolean;
    isRepeat: boolean;
    handleRepeat: () => void;
    isShuffle: boolean;
    handleShuffle: () => void;
    currentSongs: Track[] | [];
    handlePlayPause: () => void;
    handlePrevSong: () => void;
    handleNextSong: () => void;
}
