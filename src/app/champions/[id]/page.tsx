import { Metadata } from 'next';
import { fetchChampionDetail } from '../../api/championsApi'; // API 호출 함수
import { ChampionDetail } from '../types/types'; // 타입 정의
import BarChart from './components/BarChart'; // BarChart 컴포넌트 import

const BASE_URL = process.env.NEXT_PUBLIC_RIOT_DETAILl_URL;

// 메타데이터 설정
export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
  const champion = await fetchChampionDetail(params.id);
  if (!champion) {
    return {
      title: '챔피언을 찾을 수 없습니다',
      description: '챔피언 정보가 없습니다.',
    };
  }
  return {
    title: `${champion.name} - 챔피언 상세정보`,
    description: champion.blurb,
  };
};

// 챔피언 상세 페이지 컴포넌트
const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const champion: ChampionDetail | null = await fetchChampionDetail(params.id); // 챔피언 상세 정보 가져오기

  if (!champion) {
    return <div>챔피언 정보를 불러오는 데 오류가 발생했습니다.</div>;
  }

  return (
    <div 
      className="min-h-screen flex items-center" // 화면 최소 높이를 전체 화면으로 설정
      style={{
        backgroundImage: `url(${BASE_URL}/img/champion/splash/${champion.id}_0.jpg)`,
        backgroundSize: 'cover', // 이미지가 컨테이너를 덮도록 설정
        backgroundPosition: 'center', // 이미지 위치 설정
        backgroundRepeat: 'no-repeat', // 이미지 반복 방지
      }}
    >
      <div 
        className="bg-gradient-to-r from-black to-transparent p-8 rounded-md w-1/3 h-full flex flex-col justify-start" // 왼쪽에서 오른쪽으로 그라데이션 적용
        style={{ 
          minHeight: '100vh', 
        }}
      >
        <h1 className="text-4xl font-bold text-white">{champion.name}</h1>
        <h2 className="text-2xl italic text-white">{champion.title}</h2>
        <p className="text-white">{champion.lore}</p>
        <h3 className="text-xl mt-4 text-white">챔피언 스텟</h3>
        <div className="mt-4">
          <BarChart championStats={champion.stats} />
        </div>

        <h3 className="text-xl mt-4 text-white">Spells:</h3>
        <ul className="text-white">
          {champion.spells.map((spell) => (
            <li key={spell.id}>
              <strong>{spell.name}</strong>: {spell.description}
            </li>
          ))}
        </ul>
        <h3 className="text-xl mt-4 text-white">Passive:</h3>
        <div className="text-white">
          <strong>{champion.passive.name}</strong>: {champion.passive.description}
        </div>
      </div>
    </div>
  );
};

export default ChampionDetailPage;
