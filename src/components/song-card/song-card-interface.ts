/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */

interface Highlightsurls {
  artisthighlightsurl: string;
  trackhighlighturl?: string;
}

interface Artist {
  alias: string;
  id: string;
  adamid: string;
}

interface Beacondata {
  type: string;
  providername: string;
}

interface Action2 {
  name: string;
  type: string;
  uri: string;
}

interface Action {
  name: string;
  type: string;
  id?: string;
  uri?: string;
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

interface Hub {
  type: string;
  image: string;
  actions?: Action[];
  options: Option[];
  explicit: boolean;
  displayname: string;
}

interface Images {
  background: string;
  coverart: string | undefined;
  coverarthq: string;
  joecolor?: string;
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

export interface Track {
  layout: string;
  type: string;
  key: string;
  title: string;
  subtitle: string;
  share: Share;
  images: Images;
  hub: Hub;
  artists: Artist[];
  url: string;
  highlightsurls: Highlightsurls;
  properties: unknown;
}

export interface ISongCardProperties {
  song: Track,
  i:number,
  isPlaying: boolean;
  activeSong: Track;
  data: Track[];
}
