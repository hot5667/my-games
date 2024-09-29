// app/ItemList.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Item {
  image: {
    full: string;
  };
  name: string;
}

interface ItemListProps {
  items: Record<string, Item>;
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">League of Legends Items</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Object.entries(items).map(([id, item]) => (
          <Link href={`/items/${id}`} key={id}>
            <div className="border rounded-lg hover:shadow-2xl transition-shadow duration-300 text-center bg-white w-16 h-16 flex flex-col items-center justify-center">
              <Image 
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
                alt={item.name}
                width={64}
                height={64}
              />
              <p className="text-xs font-semibold mt-1 overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
