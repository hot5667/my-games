import NavLink from '../components/NavLink';
import '../styles/globals.css';
import type { Metadata } from 'next';
import Providers from "@/utils/provider";
import { PiBookFill } from "react-icons/pi";

export const metadata: Metadata = {
  title: 'LOL 백과사전',
  description: '리그 오브 레전드에 대한 모든 정보가 담긴 백과사전입니다.',
};

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg fixed w-full z-10"> {/* fixed와 w-full 추가 */}
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        <main className="pt-16"> {/* 네비게이션 바 높이만큼 패딩 추가 */}
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}