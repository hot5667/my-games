import { create } from 'zustand';
import { Item } from '../app/items/types/types';

interface ItemStore {
  items: Item[];
  setItems: (items: Item[]) => void;
  getItemById: (id: string) => Item | undefined;
}

export const useItemStore = create<ItemStore>((set) => ({
  items: [],
  setItems: (items: Item[]) => set({ items }),
  getItemById: (id: string): Item | undefined => {
    const state = useItemStore.getState();
    return state.items.find((item: Item) => item.id === id);
  },
}));
