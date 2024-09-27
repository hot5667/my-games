import { Metadata } from 'next';
import { factions } from './Data/factionsData';
import GamehistoryClient from './components/gamehistoryClient';
import Layout from './layout'; // Layout 컴포넌트 import

export const metadata: Metadata = {
  title: '게임 역사',
  description: '게임 역사에 대한 상세한 설명을 보여주는 페이지입니다.',
};

const GameHistoryPage = () => {
  return (
    <Layout>
      <GamehistoryClient factions={factions} />
    </Layout>
  );
};

export default GameHistoryPage;
