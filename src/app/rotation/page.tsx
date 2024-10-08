'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import ChampionCard from '../champions/components/ChampionCard';
import { Champion } from '../champions/types/types';

const RotationPage = () => {
  const [freeChampionIds, setFreeChampionIds] = useState<number[]>([]);
  const [championData, setChampionData] = useState<{ [key: string]: Champion }>({});

  useEffect(() => {
    const fetchChampionRotation = async () => {
      try {
        const rotationResponse = await fetch('https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-9bb8134f-3932-48ad-9426-8e05c7f67744');
        if (!rotationResponse.ok) {
          throw new Error('로테이션 데이터를 가져오는 데 실패했습니다.');
        }
        const rotationData = await rotationResponse.json();
        setFreeChampionIds(rotationData.freeChampionIds);
        console.log(rotationData);
      } catch (err) {
        console.error(err.message);
      }
    };

    const fetchChampionData = async () => {
      try {
        const championResponse = await fetch('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json');
        if (!championResponse.ok) {
          throw new Error('챔피언 데이터를 가져오는 데 실패했습니다.');
        }
        const championData = await championResponse.json();
        setChampionData(championData.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchChampionRotation();
    fetchChampionData();
  }, []);

  return (
    <div>
      <Head>
        <title>챔피언 로테이션 페이지</title>
        <meta name="description" content="현재 로테이션 중인 챔피언들을 확인하세요." />
      </Head>
      <h1>챔피언 로테이션 페이지</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {freeChampionIds.map((id) => {
          const champion = Object.values(championData).find(champ => champ.key === id.toString());
          return champion ? (
            <ChampionCard key={id} champion={champion} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default RotationPage;
