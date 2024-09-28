import { create } from 'zustand';
import axios from 'axios';
import { ChampionsData } from '../app/champions/types/types';
import { revalidateTag } from 'next/cache';

const BASE_URL = process.env.NEXT_PUBLIC_RIOT_BASE_URL;

interface ChampionStore {
  champions: ChampionsData;
  isLoading: boolean;
  fetchChampions: () => Promise<void>;
  setChampions: (champions: ChampionsData) => void; 
}

export const useChampionStore = create<ChampionStore>((set) => ({
  champions: {},
  isLoading: true,
  fetchChampions: async () => {
    set({ isLoading: true });
    const response = await axios.get(`${BASE_URL}data/ko_KR/champion.json`);
    set({ champions: response.data.data, isLoading: false });

    // 데이터 업데이트 후 revalidateTag 호출
    revalidateTag('champions-data');
  },
  setChampions: (champions) => set({ champions }), 
}));