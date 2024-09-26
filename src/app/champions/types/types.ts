export interface ChampionImage {
  full: string;
}

export interface Champion {
  name: string;
  image: ChampionImage;
}

export interface ChampionsData {
  [key: string]: Champion;
}