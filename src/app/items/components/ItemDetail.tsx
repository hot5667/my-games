import Image from 'next/image';
import Link from 'next/link';
import { Item } from '../types/types';

export default function ItemDetail({ item }: { item: Item | null }) {
  if (!item) {
    return (
      <div className="container mx-auto p-4">
        <Link href="/" className="text-blue-500 hover:underline mb-4 block">&larr; Back to items</Link>
        <p>Item not found or failed to load.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <Link href="/" className="text-blue-500 hover:underline mb-4 block">&larr; Back to items</Link>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          {item.image && item.image.full ? (
            <Image 
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
              alt={item.name}
              width={64}
              height={64}
            />
          ) : (
            <div className="w-16 h-16 bg-gray-200 flex items-center justify-center">No Image</div>
          )}
          <h1 className="text-2xl font-bold ml-4">{item.name}</h1>
        </div>
        <p className="text-gray-700 mb-2">{item.plaintext}</p>
        <div dangerouslySetInnerHTML={{ __html: item.description }} className="text-sm text-gray-600" />
        <p className="mt-4 font-semibold">Price: {item.gold?.total || 'N/A'} gold</p>
      </div>
    </div>
  );
}