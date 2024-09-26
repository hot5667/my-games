import { ChampionsData } from '../app/champions/types/types';
import { fetchChampions } from '../app/api/championsApi';

export const getChampionsData = async (): Promise<ChampionsData> => {
  return await fetchChampions();
};