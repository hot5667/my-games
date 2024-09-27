import axios from 'axios';
import { ChampionsData } from '../champions/types/types';

const BASE_URL = process.env.NEXT_PUBLIC_RIOT_BASE_URL;

export const fetchChampions = async (): Promise<ChampionsData> => {
  const response = await axios.get(`${BASE_URL}/data/ko_KR/champion.json`);
  return response.data.data;
};

export const getChampionImageUrl = (imageName: string): string => {
  return `${BASE_URL}/img/champion/${imageName}`;
};
