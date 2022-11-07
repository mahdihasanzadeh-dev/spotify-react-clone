export interface IVolumeBarProperties {
  value: number;
  min: string;
  max: string;
  onChange: (event: { target: { value: number; }; }) => void;
  setVolume: (value: number) => void;
}
