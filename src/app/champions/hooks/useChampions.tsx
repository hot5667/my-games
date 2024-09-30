import { useState, useEffect } from 'react';
import { Champion } from '../types/types';
import { fetchChampions as fetchChampionsFromApi } from '../../api/championsApi';

const ONE_DAY = 24 * 60 * 60 * 1000; 

const useChampions = (currentPage: number, limit: number) => {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState<string | null>(null); // 에러 상태 추가

  const fetchChampions = async () => {
    try {
      const data = await fetchChampionsFromApi(currentPage, limit);
      setChampions(data.champions);
      setTotalPages(data.totalPages);
      setError(null); 
    } catch (err) {
      console.error("챔피언 데이터를 가져오는 중 오류:", err);
      setError("챔피언 정보를 불러오는 데 오류가 발생했습니다."); 
    }
  };

  useEffect(() => {
    fetchChampions(); 

    const intervalId = setInterval(() => {
      fetchChampions(); 
    }, ONE_DAY);

    return () => {
      clearInterval(intervalId); 
    };
  }, [currentPage, limit]);

  return { champions, totalPages, error }; 
};

export default useChampions;