import MainContent from './components/MainContent'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LOL 백과사전',
  description: '리그 오브 레전드에 대한 모든 정보가 담긴 백과사전입니다.',
};

const MainPage = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-gradient-to-b from-sky-300 to-white">
      <MainContent /> 
    </div>
  );
};

export default MainPage;