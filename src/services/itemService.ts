import axios from 'axios';
import { Item, ItemsResponse } from '../app/items/types/types';

const BASE_URL = process.env.NEXT_PUBLIC_RIOT_BASE_URL;

// 아이템 목록을 페칭하는 함수 (페이징 처리)
export const fetchItems = async (page: number, limit: number): Promise<Item[]> => {
  try {
    const response = await axios.get<ItemsResponse>(`${BASE_URL}/data/ko_KR/item.json`);
    const allItems = Object.values(response.data.data) as Item[];

    // 페이지네이션 처리
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedItems = allItems.slice(startIndex, endIndex);
    
    return paginatedItems;
  } catch (error) {
    console.error("아이템 데이터를 가져오는 중 오류가 발생했습니다:", error);
    return [];
  }
};

// 아이템 이미지 URL을 반환하는 함수
export const getItemImageUrl = (imageName: string): string => {
  return `${BASE_URL}/img/item/${imageName}`;
};

// 특정 아이템의 상세 정보를 페칭하는 함수
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

// 여러 아이템의 상세 정보를 병렬로 페칭하는 함수
export const fetchMultipleData = async (itemIds: string[]): Promise<Item[]> => {
  try {
    const requests = itemIds.map((id) => 
      axios.get<{ data: { [key: string]: Item } }>(`${BASE_URL}/data/ko_KR/item/${id}.json`)
    );
    const responses = await Promise.all(requests);
    const items = responses.map((response, index) => response.data.data[itemIds[index]]);
    
    return items as Item[];
  } catch (error) {
    console.error("여러 아이템 데이터를 가져오는 중 오류가 발생했습니다:", error);
    return [];
  }
};
