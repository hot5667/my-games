import axios from 'axios';
import { ChampionsData, ChampionsResponse, ChampionDetail } from '../champions/types/types';

const BASE_URL = process.env.NEXT_PUBLIC_RIOT_BASE_URL;

export const fetchChampions = async (page: number, limit: number): Promise<{
  champions: ChampionsData;
  totalPages: number;
}> => {
  try {
    const response = await axios.get<ChampionsResponse>(`${BASE_URL}/data/ko_KR/champion.json`);

    const allChampions: ChampionsData = Object.values(response.data.data) as ChampionsData;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const champions: ChampionsData = allChampions.slice(startIndex, endIndex);

    const totalPages = Math.ceil(allChampions.length / limit);

    return { champions, totalPages };
  } catch (error) {
    console.error("챔피언 데이터를 가져오는 중 오류가 발생했습니다:", error);
    return { champions: [], totalPages: 0 };
  }
};

export const getChampionImageUrl = (imageName: string): string => {
  return `${BASE_URL}/img/champion/${imageName}`;
};

export const fetchChampionDetail = async (championId: string): Promise<ChampionDetail | null> => {
  try {
    const response = await axios.get<{ data: { [key: string]: ChampionDetail } }>(
      `${BASE_URL}/data/ko_KR/champion/${championId}.json`
    );
    
    const championDetail = response.data.data[championId];
    
    return championDetail as ChampionDetail; 
  } catch (error) {
    console.error(`챔피언 상세 정보를 가져오는 중 오류가 발생했습니다 (ID: ${championId}):`, error);
    return null;
  }
};