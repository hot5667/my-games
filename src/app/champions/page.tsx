import { Metadata } from 'next';
import { ChampionsData } from './types/types';
import { fetchChampions } from '../api/championsApi';
import ChampionsClient from './components/ChampionsClient';

export const metadata: Metadata = {
  title: '챔피언 소개 - LOL 백과사전',
  description: '140여 명의 챔피언 중 자신의 플레이 스타일에 어울리는 챔피언을 찾아보세요.',
};

const ChampionsPage = async () => {
  // 서버에서 데이터 가져오기
  const initialChampions: ChampionsData = await fetchChampions();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">챔피언을 선택하세요</h1>
      <p className="text-lg text-gray-600 mb-6">
        140여 명의 챔피언 중 자신의 플레이 스타일에 어울리는 챔피언을 찾아보세요.
      </p>
      <ChampionsClient initialChampions={initialChampions} />
    </div>
  );
};

export default ChampionsPage;