import axios from 'axios';
import { ChampionsData } from '../champions/types/types';

export const fetchChampions = async (): Promise<ChampionsData> => {
  const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json');
  return response.data.data;
};

export const getChampionImageUrl = (imageName: string): string => {
  return `https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${imageName}`;
};
