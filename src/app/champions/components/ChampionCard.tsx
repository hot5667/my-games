'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Champion } from '../types/types';
import { getChampionImageUrl } from '../../api/championsApi';

interface ChampionCardProps {
  champion: Champion;
}

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <>
      <Head>
        <title>{champion.name || '챔피언 이름 없음'} - LOL 챔피언</title>
        <meta name="description" content={`${champion.name || '챔피언 이름 없음'}의 정보 및 특징을 확인하세요.`} />
      </Head>

      <Link href={`/champions/${champion.id}`} className="w-full h-full">
        <div className="card w-full h-full bg-white shadow-lg rounded-lg transition-transform transform hover:rotate-y-180">
          <div className="card__front w-full h-full flex flex-col items-center justify-center backface-hidden">
            <Image
              src={getChampionImageUrl(champion.image.full)}
              alt={champion.name}
              width={200}
              height={200}
              className="mx-auto"
            />
            <h2 className="text-lg mt-2 font-semibold">{champion.name}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ChampionCard;