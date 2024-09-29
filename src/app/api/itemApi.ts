import axios from 'axios';
import { Item, ItemsResponse } from '../items/types/types'; 

const BASE_URL = process.env.NEXT_PUBLIC_RIOT_BASE_URL;

export const fetchItems = async (): Promise<Item[]> => {
  try {
    const response = await axios.get<ItemsResponse>(`${BASE_URL}/data/ko_KR/item.json`);
    return Object.values(response.data.data) as Item[];
  } catch (error) {
    console.error("아이템 데이터를 가져오는 중 오류가 발생했습니다:", error);
    return [];
  }
};

//NOTE - 아이템 이미지 데이터
export const getItemImageUrl = (imageName: string): string => {
  return `${BASE_URL}/img/item/${imageName}`;
};

export const fetchItemDetail = async (itemId: string): Promise<Item | null> => {
  try {
    const response = await axios.get<{ data: { [key: string]: Item } }>(
      `${BASE_URL}/data/ko_KR/item/${itemId}.json`
    );

    const itemDetail = response.data.data[itemId];
    
    return itemDetail as Item; 
  } catch (error) {
    console.error(`아이템 상세 정보를 가져오는 중 오류가 발생했습니다 (ID: ${itemId}):`, error);
    return null;
  }
};