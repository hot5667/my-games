export interface ChampionImage {
  full: string;
}

export interface Champion {
  id: string;
  name: string;
  image: ChampionImage;
}

export interface ChampionsResponse {
  data: {
    [key: string]: Champion; 
  };
}

export type ChampionsData = Champion[];
export interface ChampionDetail {
  id: string;
  key: string;
  name: string;
  title: string;
  lore: string;
  blurb: string;
  tags: string[];
  stats: {
    hp: number;                
    attackdamage: number;      
    armor: number;              
    spellblock: number;        
    attackspeed: number;
    movespeed: number;       
    crit: number;               
    [key: string]: number; 
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  spells: Array<{
    id: string;
    name: string;
    description: string;
    tooltip: string;
    cooldown: number[];
    cost: number[];
    range: number[];
    image: {
      full: string;
      sprite: string;
      group: string;
      x: number;
      y: number;
      w: number;
      h: number;
    };
  }>;
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
      sprite: string;
      group: string;
      x: number;
      y: number;
      w: number;
      h: number;
    };
  };
}
