'use client';

import { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { factions } from './Data/factionsData';

const GameHistoryPage = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // 스크롤 위치에 따라 인덱스를 업데이트
    const newIndex = Math.floor(scrollY / windowHeight);
    if (newIndex !== scrollIndex && newIndex < factions.length) {
      setScrollIndex(newIndex);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollIndex]);

  return (
    <ParallaxProvider>
      <div style={{ height: `${factions.length * 100}vh` }}> {/* 각 섹션 높이를 조정 */}
        {factions.map((faction, index) => (
          <div
            key={index}
            className={`fixed inset-0 flex flex-col items-center justify-center transition-opacity duration-700 transform ${scrollIndex === index ? 'opacity-100' : 'opacity-0'}`}
            style={{
              height: '100vh',
              top: '0',
              transition: 'opacity 0.5s ease', // 부드러운 전환 효과
              display: 'flex', // flex 속성 추가
              flexDirection: 'column', // 열 방향 정렬
              justifyContent: 'center', // 중앙 정렬
              alignItems: scrollIndex % 2 === 0 ? 'flex-start' : 'flex-end', // 인덱스에 따라 왼쪽 또는 오른쪽 정렬
              padding: '20px', // 패딩 추가
            }}
          >
            <h1 className="text-4xl font-bold">{faction.name}</h1>
            <p className="text-xl mt-4">{faction.description}</p>
          </div>
        ))}
      </div>
    </ParallaxProvider>
  );
};

export default GameHistoryPage;
