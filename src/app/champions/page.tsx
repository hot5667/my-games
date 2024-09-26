import { Metadata } from 'next';
import { ChampionsData } from './types/types';
import { fetchChampions } from '../api/championsApi';
import ChampionCard from './components/ChampionCard';
import { useChampionStore } from '@/store/championsStore';

export const metadata: Metadata = {
  title: '챔피언 소개 - LOL 백과사전',
  description: '140여 명의 챔피언 중 자신의 플레이 스타일에 어울리는 챔피언을 찾아보세요.',
};

const ChampionsPage = async () => {
  // 서버에서 챔피언 데이터 가져오기
  const champions: ChampionsData = await fetchChampions();
  
  // 상태 관리 스토어에 데이터 설정
  useChampionStore.getState().setChampions(champions);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">챔피언을 선택하세요</h1>
      <p className="text-lg text-gray-600 mb-6">
        140여 명의 챔피언 중 자신의 플레이 스타일에 어울리는 챔피언을 찾아보세요.
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
