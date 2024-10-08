import NavLink from '../components/NavLink';
import '../styles/globals.css';
import type { Metadata } from 'next';
import Providers from "@/lib/provider";
import { PiBookFill } from "react-icons/pi";
import { fetchChampions } from "@/services/championsApi"; // API 호출 함수

export const metadata: Metadata = {
  title: 'LOL 백과사전',
  description: '리그 오브 레전드에 대한 모든 정보가 담긴 백과사전입니다.',
};

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <PiBookFill className="text-white text-2xl mr-2" />
          <h1 className="text-white text-2xl font-bold">LOL 백과사전</h1>
        </div>
        <ul className="flex items-center space-x-8">
          <NavLink href="/">홈</NavLink>
          <li className="nav-link">|</li>
          <NavLink href="/gamehistory">세계관 설명</NavLink>
          <li className="nav-link">|</li>
          <NavLink href="/champions">챔피언 소개</NavLink>
          <li className="nav-link">|</li>
          <NavLink href="/items">아이템 소개</NavLink>
          <li className="nav-link">|</li>
          <NavLink href="/rotation">캐릭터 로테이션</NavLink>
        </ul>
      </div>
    </nav>
  );
};

// ISR을 위한 데이터 fetching
const getInitialData = async () => {
  try {
    const { champions } = await fetchChampions(1, 16); // 예시로 첫 페이지 챔피언 가져오기
    return champions;
  } catch (error) {
    console.error("챔피언 데이터를 가져오는 데 오류가 발생했습니다.", error);
    return [];
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialChampions = await getInitialData(); // 데이터 fetching

  return (
    <html lang="ko">
      <body>
        <Navbar />
        <main className="pt-16">
          <Providers initialChampions={initialChampions}>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
