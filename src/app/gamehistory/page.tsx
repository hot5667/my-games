'use client';

import { useEffect, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { factions } from './Data/factionsData';
import { PiMouseScroll } from "react-icons/pi";

// 타입 정의 (faction 객체에 대한 타입)
interface Faction {
  name: string;
  description: string;
}

// GameHistoryPage 컴포넌트
const GameHistoryPage: React.FC = () => {
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const [showScrollIcon, setShowScrollIcon] = useState<boolean>(true); // 초기 상태를 true로 설정
  let timeoutId: NodeJS.Timeout;

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // 스크롤 위치에 따라 인덱스를 업데이트
    const newIndex = Math.floor(scrollY / windowHeight);
    if (newIndex !== scrollIndex && newIndex < factions.length) {
      setScrollIndex(newIndex);
    }

    // 스크롤 이벤트 발생 시 아이콘 숨기기 및 타이머 초기화
    setShowScrollIcon(false);
    clearTimeout(timeoutId);

    // 10초 후에 아이콘 표시
    timeoutId = setTimeout(() => {
      setShowScrollIcon(true);
    }, 10000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // 컴포넌트가 언마운트 될 때 타임아웃 정리
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [scrollIndex]);

  return (
    <ParallaxProvider>
      <div style={{ height: `${factions.length * 100}vh` }}>
        {factions.map((faction: Faction, index: number) => (
          <div
            key={index}
            className={`fixed inset-0 flex flex-col transition-opacity duration-700 
                        ${scrollIndex === index ? 'opacity-100' : 'opacity-0'}`}
            style={{
              background: `${scrollIndex % 2 === 0 
                ? 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))' 
                : 'linear-gradient(to left, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))'}`,
            }}
          >
            <div className={`h-screen flex flex-col 
                             ${scrollIndex % 2 === 0 ? 'items-start' : 'items-end'} 
                             p-10 transition-opacity duration-500`}
            >
              <h1 className="text-5xl font-extrabold text-white">{faction.name}</h1>
              <p className="text-2xl mt-6 whitespace-pre-line text-white">
                {faction.description}
              </p>
            </div>
          </div>
        ))}
        {showScrollIcon && (
          <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50">
            <PiMouseScroll className="text-white text-4xl animate-bounce" />
          </div>
        )}
      </div>
    </ParallaxProvider>
  );
};

export default GameHistoryPage;