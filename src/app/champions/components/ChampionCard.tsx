// ChampionCard.tsx
import Image from 'next/image';
import { Champion } from '../types/types';

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCard: React.FC<ChampionCardProps> = ({ champion }) => {
  return (
    <div className="relative overflow-hidden perspective">
      <div className="card w-full h-full bg-white shadow-lg rounded-lg transition-transform transform hover:rotate-y-180">
        <div className="card__front w-full h-full flex flex-col items-center justify-center backface-hidden">
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
            alt={champion.name}
            width={200}
            height={200}
            className="mx-auto"
          />
          <h2 className="text-lg mt-2 font-semibold">{champion.name}</h2>
        </div>
        <div className="card__back w-full h-full flex items-center justify-center backface-hidden transform rotate-y-180">
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
            <p className="text-center">챔피언 정보</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionCard;
