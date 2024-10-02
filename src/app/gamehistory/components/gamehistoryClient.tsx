'use client';

import { useEffect, useState } from 'react';
import { PiMouseScroll } from "react-icons/pi";
import FactionImages from './FactionImages'; 

interface Faction {
  name: string;
  description: string;
}

interface GameHistoryPageProps {
  factions: Faction[];
}

function GamehistoryClient({ factions }: GameHistoryPageProps) {
  const [scrollIndex, setScrollIndex] = useState<number>(0);
  const [showScrollIcon, setShowScrollIcon] = useState<boolean>(true); 
  let timeoutId: NodeJS.Timeout;

  const factionImages = FactionImages();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    const newIndex = Math.floor(scrollY / windowHeight);
    if (newIndex !== scrollIndex && newIndex < factions.length) {
      setScrollIndex(newIndex);
    }

    setShowScrollIcon(false);
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setShowScrollIcon(true);
    }, 10000);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [scrollIndex]);

  return (
    <div style={{ height: `${factions.length * 100}vh` }}>
      {factions.map((faction: Faction, index: number) => (
        <div
          key={index}
          className={`fixed inset-0 flex flex-col transition-opacity duration-700 z-20
                      ${scrollIndex === index ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: `
              linear-gradient(to ${scrollIndex % 2 === 0 ? 'right' : 'left'}, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
              url(${factionImages[index % factionImages.length].src})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
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
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
          <PiMouseScroll className="text-white text-4xl animate-bounce" />
          <p className="text-white mt-2 animate-bounce">스크롤하여 더 많은 정보를 확인하세요!</p>
        </div>
      )}
    </div>
  );
}

export default GamehistoryClient;
