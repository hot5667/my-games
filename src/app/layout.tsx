import NavLink from '../components/NavLink';
import '../styles/globals.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">LOL 백과사전</h1>
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
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}