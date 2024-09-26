'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { ChampionsData } from './types/types'; 
import ChampionCard from './components/ChampionCard'; 

const fetchChampions = async (): Promise<ChampionsData> => {
  const response = await axios.get('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json');
  return response.data.data; // 챔피언 데이터 반환
};

const ChampionsPage: React.FC = () => {
  const [champions, setChampions] = useState<ChampionsData>({});

  useEffect(() => {
    const getChampions = async () => {
      const championsData = await fetchChampions();
      setChampions(championsData);
    };
    getChampions();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">챔피언을 선택하세요</h1>
      <p className="text-lg text-gray-600 mb-6">
        140여 명의 챔피언 중 자신의 플레이 스타일에 어울리는 챔피언을 찾아보세요.
        한 명의 챔피언을 완벽히 익히거나 모든 챔피언을 사용해 볼 수도 있습니다.
      </p>
      <div className="grid grid-cols-4 gap-4">
        {Object.keys(champions).map((key) => (
          <ChampionCard key={key} champion={champions[key]} />
        ))}
      </div>
    </div>
  );
};

export default ChampionsPage;