"use client";

import { useEffect, useState } from 'react';
import BarChart from './BarChart';
import { PiMouseScroll } from "react-icons/pi";
import { MdCheckCircle } from "react-icons/md"; // 체크 아이콘 추가
import { ChampionDetail } from '../../types/types';

const ChampionStats = ({ champion }: { champion: ChampionDetail }) => {
  const [showStats, setShowStats] = useState(true); // 스텟과 스킬 표시 상태
  const [showScrollIcon, setShowScrollIcon] = useState(true); // 스크롤 아이콘 표시 상태

  // 스크롤 이벤트 핸들러
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const shouldShowStats = window.scrollY < 600; // 스크롤 600px 시 상태 변경
      setShowStats(shouldShowStats);

      // 스크롤 아이콘 숨김
      setShowScrollIcon(false);
      clearTimeout(scrollTimeout);

      // 10초 후에 스크롤 아이콘을 다시 보여줌
      scrollTimeout = setTimeout(() => {
        setShowScrollIcon(true);
      }, 10000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // 마지막 섹션 확인
  useEffect(() => {
    if (!showStats) {
      setShowScrollIcon(true); // 마지막 섹션에 도달하면 아이콘을 즉시 표시
    }
  }, [showStats]);

  return (
    <div className="min-h-screen pt-20"> {/* 여유 공간 생성 */}

      {/* 스텟 정보 섹션 */}
      {showStats ? (
        <div className="mt-4 transition-opacity duration-500 ease-in-out opacity-100">
          <h3 className="text-xl mt-4 text-white">챔피언 스텟</h3>
          <BarChart championStats={champion.stats} />
        </div>
      ) : (
        <div className="transition-opacity duration-500 ease-in-out opacity-100">
          {/* 스킬 정보 섹션 */}
          <h3 className="text-xl mt-4 text-white">스킬들</h3>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {champion.spells.map((spell) => (
              <div key={spell.id} className="flex flex-col items-center justify-center bg-black bg-opacity-40 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-teal-300">{spell.name}</h4>
                <p className="text-white text-sm text-center mt-2">{spell.description}</p>
              </div>
            ))}
          </div>

          {/* 패시브 스킬 */}
          <h3 className="text-xl mt-8 text-white">패시브 스킬</h3>
          <div className="flex items-center justify-start mt-4 bg-black bg-opacity-40 p-4 rounded-lg">
            <div className="text-teal-300 text-lg font-semibold">{champion.passive.name}</div>
            <p className="text-white ml-4">{champion.passive.description}</p>
          </div>
        </div>
      )}

      {/* 스크롤 아이콘 */}
      {showScrollIcon && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center">
          {showStats ? (
            <>
              <PiMouseScroll className="text-4xl text-teal-300 animate-bounce" />
              <p className="text-white mt-2 animate-bounce">스크롤하여 더 많은 정보를 확인하세요!</p>
            </>
          ) : (
            <>
              <MdCheckCircle className="text-4xl text-teal-300 animate-bounce" />
              <p className="text-white mt-2 animate-bounce">마지막 섹션입니다!</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChampionStats;
