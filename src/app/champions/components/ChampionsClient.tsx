'use client';

import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChampionsData, Champion } from '../types/types';
import ChampionCard from './ChampionCard';
import { useChampionStore } from '@/store/championsStore';
import { fetchChampions } from '../../api/championsApi';

interface ChampionsClientProps {
  initialChampions: ChampionsData;
}

const ChampionsClient: React.FC<ChampionsClientProps> = ({ initialChampions }) => {
  const { data: champions } = useQuery<ChampionsData>({
    queryKey: ['champions'],
    queryFn: fetchChampions,
    initialData: initialChampions,
    staleTime: 24 * 60 * 60 * 1000,
  });

  useEffect(() => {
    if (champions) {
      useChampionStore.getState().setChampions(champions);
    }
  }, [champions]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {champions && Object.entries(champions).map(([key, champion]: [string, Champion]) => (
        <ChampionCard key={key} champion={champion} />
      ))}
    </div>
  );
};

export default ChampionsClient;