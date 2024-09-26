import { create } from 'zustand';
import axios from 'axios';
import { ChampionsData } from '../app/champions/types/types';
import { revalidateTag } from 'next/cache';

interface ChampionStore {
  champions: ChampionsData;
  isLoading: boolean;
  fetchChampions: () => Promise<void>;
  setChampions: (champions: ChampionsData) => void; // champions 상태를 설정하는 함수 추가
}

export const useChampionStore = create<ChampionStore>((set) => ({
  champions: {},
  isLoading: true,
  fetchChampions: async () => {
    set({ isLoading: true });
    const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json');
    set({ champions: response.data.data, isLoading: false });

    // 데이터 업데이트 후 revalidateTag 호출
    revalidateTag('champions-data');
  },
  setChampions: (champions) => set({ champions }), // champions 상태를 설정하는 함수 구현
}));