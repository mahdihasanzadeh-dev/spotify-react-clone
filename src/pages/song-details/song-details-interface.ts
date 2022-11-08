/* eslint-disable @typescript-eslint/naming-convention */

interface Metapage {
    image: string;
    caption: string;
}
interface Action3 {
    name: string;
    type: string;
    uri: string;
}

interface Apple {
    actions: Action3[];
}
interface Myshazam {
    apple: Apple;
}

interface Metadatum {
    title: string;
    text: string;
}

interface Beacondata2 {
    lyricsid: string;
    providername: string;
    commontrackid: string;
}
interface Dimensions {
    width: number;
    height: number;
}

interface Share {
    subject: string;
    text: string;
    href: string;
    image: string;
    twitter: string;
    html: string;
    avatar: string;
    snapchat: string;
}

interface Action4 {
    name: string;
    type: string;
    share: Share;
    uri: string;
}

interface Image {
    dimensions: Dimensions;
    url: string;
}

interface Youtubeurl {
    caption: string;
    image: Image;
    actions: Action4[];
}
interface Section {
    type: string;
    metapages?: Metapage[];
    tabname: string;
    metadata?: Metadatum[];
    text?: string[];
    footer?: string;
    beacondata?: Beacondata2;
    youtubeurl?: Youtubeurl;
}

interface Urlparams {
    '{tracktitle}': string;
    '{trackartist}': string;
}

interface Genres {
    primary: string;
}

export interface IArtist {
    id: string;
    adamid: string;
}

interface Beacondata {
    type: string;
    providername: string;
}

interface Action2 {
    name?: string;
    type: string;
    uri: string;
}

interface Option {
    caption: string;
    actions: Action2[];
    beacondata: Beacondata;
    image: string;
    type: string;
    listcaption: string;
    overflowimage: string;
    colouroverflowimage: boolean;
    providername: string;
}

interface Action {
    name: string;
    type: string;
    id?: string;
    uri?: string;
}

interface Images2 {
    overflow: string;
    default: string;
}

interface Provider {
    caption: string;
    images: Images2;
    actions: Action3[];
    type: string;
}

interface Hub {
    type: string;
    image: string;
    actions: Action[];
    options: Option[];
    providers: Provider[];
    explicit: boolean;
    displayname: string;
}

interface Images {
    background: string;
    coverart: string;
    coverarthq: string;
    joecolor: string;
}

export interface ISongData {
    layout: string;
    type: string;
    key: string;
    title: string;
    subtitle: string;
    images: Images;
    share: Share;
    hub: Hub;
    url: string;
    artists: IArtist[];
    isrc: string;
    genres: Genres;
    urlparams: Urlparams;
    myshazam: Myshazam;
    albumadamid: string;
    sections: Section[];
}
