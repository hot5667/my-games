import { ChampionsData } from './types/types';
import ChampionCard from './components/ChampionCard';
import { fetchChampions } from '../api/championsApi'; // 유틸리티 함수 import

const ChampionsPage = async () => {
  const champions: ChampionsData = await fetchChampions();

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
