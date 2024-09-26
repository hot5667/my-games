'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemCard from './components/ItemCard';
import { Item, ItemsResponse } from './types/types';

const ItemPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get<ItemsResponse>('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json');
        setItems(Object.values(response.data.data));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching items');
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching items: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">아이템 소개</h1>
      <p>여기서 캐릭터 로테이션에 대한 정보를 볼 수 있습니다.</p>
      <ul className="mt-4 grid grid-cols-4 gap-4">
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemPage;