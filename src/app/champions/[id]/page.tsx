import { Metadata } from 'next';
import { fetchChampionDetail } from '../../../services/championsApi'; // API 호출 함수
import { ChampionDetail } from '../types/types'; // 타입 정의
import ChampionStats from './components/ChampionStats'; // ChampionStats 컴포넌트 import

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
      className="min-h-[150vh] flex flex-col transition-opacity duration-700" 
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
          url(${BASE_URL}/img/champion/splash/${champion.id}_0.jpg)
        `,
        backgroundSize: 'cover', // 이미지가 컨테이너를 덮도록 설정
        backgroundPosition: 'center top 4em', // 이미지 위치 설정
        backgroundRepeat: 'no-repeat', // 이미지 반복 방지
        backgroundAttachment: 'fixed', // 배경 이미지 고정
      }}
    >
      <div className=" w-full h-full overflow-auto">
        <div 
          className="fixed bg-gradient-to-r  p-8 w-1/3 h-full flex flex-col justify-start" 
          style={{ 
            minHeight: '100vh', 
          }}
        >
          <h1 className="text-4xl font-bold text-white">{champion.name}</h1>
          <h2 className="text-2xl italic text-white">{champion.title}</h2>
          <p className="text-white">{champion.lore}</p>

          <ChampionStats champion={champion} />
        </div>
      </div>
    </div>
  );
};

export default ChampionDetailPage;