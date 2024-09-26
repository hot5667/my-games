import '../styles/globals.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          LOL 백과사전</h1>
        <ul className="flex items-center space-x-8">
          <li>
            <a href="/" className="nav-link group"> 
              홈
              <span className="nav-link-line"></span>
            </a>
          </li>
          <li>
            <a href="/champions" className="nav-link group"> 
              챔피언 소개
              <span className="nav-link-line"></span>
            </a>
          </li>
          <li>
            <a href="/items" className="nav-link group"> 
              아이템 소개
              <span className="nav-link-line"></span>
            </a>
          </li>
          <li>
            <a href="/rotation" className="nav-link group"> 
              캐릭터 로테이션
              <span className="nav-link-line"></span>
            </a>
          </li>
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