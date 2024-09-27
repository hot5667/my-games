import Image from 'next/image';
import { Item } from '../types/types'; 

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <li className="relative overflow-hidden perspective">
      <div className="card w-full h-full bg-white shadow-lg rounded-lg transition-transform transform hover:rotate-y-180">
        <div className="card__front w-full h-full flex flex-col items-center justify-center backface-hidden">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
            alt={item.name}
            width={200}
            height={200}
            className="mx-auto"
          />
          <h2 className="text-lg mt-2 font-semibold">{item.name}</h2>
        </div>
        <div className="card__back w-full h-full flex items-center justify-center backface-hidden transform rotate-y-180">
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
            <p className="text-center">아이템 정보</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ItemCard;