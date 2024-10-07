import axios, { AxiosInstance } from 'axios';
import { ChampionsData, ChampionsResponse, ChampionDetail } from '../champions/types/types';

const BASE_URL = process.env.NEXT_PUBLIC_RIOT_BASE_URL;

// 챔피언 데이터 API 인스턴스 생성
const championApi: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/data/ko_KR`,
  timeout: 10000, // 10초 타임아웃
  headers: {
    'Content-Type': 'application/json',
  },
});

// 이미지 API 인스턴스 생성
const imageApi: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/img`,
  timeout: 5000,
});

// 챔피언 목록 페칭 함수
export const fetchChampions = async (page: number, limit: number): Promise<{
  champions: ChampionsData[];
  totalPages: number;
}> => {
  try {
    const response = await championApi.get<ChampionsResponse>('/champion.json');
    const allChampions: ChampionsData[] = Object.values(response.data.data) as ChampionsData[];

    // 페이징 처리
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const champions = allChampions.slice(startIndex, endIndex);
    const totalPages = Math.ceil(allChampions.length / limit);

    return { champions, totalPages };
  } catch (error) {
    console.error("챔피언 데이터를 가져오는 중 오류가 발생했습니다:", error);
    return { champions: [], totalPages: 0 };
  }
};

// 챔피언 이미지 URL 반환 함수
export const getChampionImageUrl = (imageName: string): string => {
  return `${imageApi.defaults.baseURL}/champion/${imageName}`;
};

// 챔피언 상세 정보 페칭 함수
export const fetchChampionDetail = async (championId: string): Promise<ChampionDetail | null> => {
  try {
    const response = await championApi.get<{ data: { [key: string]: ChampionDetail } }>(
      `/champion/${championId}.json`
    );
    
    const championDetail = response.data.data[championId];
    return championDetail; 
  } catch (error) {
    console.error(`챔피언 상세 정보를 가져오는 중 오류가 발생했습니다 (ID: ${championId}):`, error);
    return null;
  }
};

// Axios 요청 및 응답 인터셉터 설정
championApi.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

championApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("서버 응답 오류:", error.response.data);
      console.error("상태 코드:", error.response.status);
    } else if (error.request) {
      console.error("응답을 받지 못했습니다:", error.request);
    } else {
      console.error("요청 설정 중 오류 발생:", error.message);
    }
    return Promise.reject(error);
  }
);

export { championApi, imageApi };