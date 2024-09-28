'use client';

import React, { useState } from 'react';
import ChampionCard from './ChampionCard';
import useChampions from '../hooks/useChampions';
import PaginationButton from './PaginationButton';

const ChampionList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 16;

  // useChampions 훅을 사용하여 챔피언 데이터를 가져옴
  const { champions, totalPages, error } = useChampions(currentPage, limit);

  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  // 에러가 발생한 경우 처리
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {champions.map((champion) => (
          <ChampionCard key={champion.id} champion={champion} />
        ))}
      </div>
      <div className="mt-4 flex justify-between w-full max-w-md">
        <PaginationButton onClick={prevPage} disabled={currentPage === 1} label="이전" />
        <span className="self-center">{currentPage} / {totalPages}</span>
        <PaginationButton onClick={nextPage} disabled={currentPage === totalPages} label="다음" />
      </div>
    </div>
  );
};

export default ChampionList;
