// ChampionsPage.tsx
'use client'

import { useEffect, useState } from 'react';
import { ChampionsData } from './types/types'; // 타입 임포트
import ChampionCard from './components/ChampionCard'; // 챔피언 카드 컴포넌트 임포트

const fetchChampions = async (): Promise<ChampionsData> => {
  const response = await fetch('https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json');
  const data = await response.json();
  return data.data; // 챔피언 데이터 반환
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