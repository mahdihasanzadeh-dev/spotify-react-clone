export interface ISeekbarProperties {
    value: number;
    min: string;
    max: number;
    onInput: (event: { target: { value: number; }; })=>void;
    increaseSeekTime: (value: number) => void;
    decreaseSeekTime: (value: number) => void;
    appTime: number;
}
