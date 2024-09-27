import { create } from 'zustand';
import axios from 'axios';
import { ItemsData } from '../app/items/types/types';
import { revalidateTag } from 'next/cache';

const BASE_URL = process.env.NEXT_PUBLIC_RIOT_BASE_URL;

interface ItemStore {
  items: ItemsData;
  isLoading: boolean;
  fetchItems: () => Promise<void>;
  setItems: (items: ItemsData) => void; 
}

export const useItemStore = create<ItemStore>((set) => ({
  items: {},
  isLoading: true,
  fetchItems: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get(`${BASE_URL}/data/ko_KR/item.json`);
      set({ items: response.data.data, isLoading: false });

      revalidateTag('items-data');
    } catch (error) {
      console.error("Error fetching items:", error);
      set({ isLoading: false });
    }
  },
  setItems: (items) => set({ items }), 
}));
