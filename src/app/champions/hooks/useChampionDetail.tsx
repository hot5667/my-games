'use Client'

import { useState, useEffect } from 'react';
import { fetchChampionDetail } from '../../../services/championsApi';
import { ChampionDetail } from '../types/types';

const useChampionDetail = (championId: string) => {
  const [championDetail, setChampionDetail] = useState<ChampionDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchChampion = async () => {
    try {
      const detail = await fetchChampionDetail(championId);
      if (detail) {
        setChampionDetail(detail);
        setError(null); // 에러 초기화
      } else {
        setError("챔피언 정보를 찾을 수 없습니다.");
      }
    } catch (err) {
      console.error("챔피언 상세 정보를 가져오는 중 오류:", err);
      setError("챔피언 정보를 불러오는 데 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChampion();
  }, [championId]);

  return { championDetail, loading, error };
};

export default useChampionDetail;