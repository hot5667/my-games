import { Metadata } from 'next';
import Image from 'next/image';
import { fetchChampionDetail } from '../../api/championsApi'; // API 호출 함수
import { ChampionDetail } from '../types/types'; // 타입 정의

const BASE_URL = process.env.NEXT_PUBLIC_RIOT_BASE_URL;

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
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">{champion.name}</h1>
      <h2 className="text-2xl italic">{champion.title}</h2>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} // 이미지 URL 변경
        alt={champion.name} 
        className="my-4"
        width={300} 
        height={300}
      />
      <p>{champion.lore}</p>
      <h3 className="text-xl mt-4">Stats:</h3>
      <ul>
        <li>HP: {champion.stats.hp}</li>
        <li>Attack Damage: {champion.stats.attackdamage}</li>
        <li>Armor: {champion.stats.armor}</li>
        <li>Magic Resist: {champion.stats.magicresist}</li>
        <li>Attack Speed: {champion.stats.attackspeed}</li>
        <li>Critical Strike Chance: {champion.stats.crit}</li>
      </ul>
      <h3 className="text-xl mt-4">Spells:</h3>
      <ul>
        {champion.spells.map((spell) => (
          <li key={spell.id}>
            <strong>{spell.name}</strong>: {spell.description}
          </li>
        ))}
      </ul>
      <h3 className="text-xl mt-4">Passive:</h3>
      <div>
        <strong>{champion.passive.name}</strong>: {champion.passive.description}
      </div>
    </div>
  );
};

export default ChampionDetailPage;
