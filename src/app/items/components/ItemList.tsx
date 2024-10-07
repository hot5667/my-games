'use client';

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

function ItemList({ items }: ItemListProps) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">League of Legends Items</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Object.entries(items).map(([id, item]) => (
          <Link href={`/items/${id}`} key={id}>
            <div className="border rounded-lg duration-300 text-center bg-white hover:shadow-lg">
              <Image 
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
                alt={item.name}
                width={100}
                height={100}
                className="mx-auto mb-2"
              />
              <p className="text-sm font-semibold mt-1 overflow-hidden text-ellipsis whitespace-nowrap relative">
                {item.name}
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
