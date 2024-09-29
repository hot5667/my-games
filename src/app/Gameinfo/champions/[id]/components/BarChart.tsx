"use client";

import { Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Chart.js 등록
Chart.register(...registerables);
Chart.register(ChartDataLabels); 

const BarChart = ({ championStats }: { championStats: { hp: number; attackdamage: number; armor: number; spellblock: number; attackspeed: number; movespeed: number } }) => {
  const maxStats = {
    hp: 1000, // 최대 체력
    attackdamage: 100, // 최대 공격력
    armor: 100, // 최대 방어력
    spellblock: 100, // 최대 마법 저항
    attackspeed: 100, // 최대 공격 속도
    movespeed: 100, // 최대 이동 속도
  };

  const data = {
    labels: ['체력', '공격력', '방어력', '마법 저항', '공격 속도', '이동 속도'],
    datasets: [
      {
        label: 'Champion Stats',
        data: [
          Math.round((championStats.hp / maxStats.hp) * 100), // 체력 비율
          Math.round((championStats.attackdamage / maxStats.attackdamage) * 100), // 공격력 비율
          Math.round((championStats.armor / maxStats.armor) * 100), // 방어력 비율
          Math.round((championStats.spellblock / maxStats.spellblock) * 100), // 마법 저항 비율
          Math.round((championStats.attackspeed / maxStats.attackspeed) * 10000), // 공격 속도 비율
          Math.round((championStats.movespeed / maxStats.movespeed) * 10), // 이동 속도 비율
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          stepSize: 50, 
          callback: (value: number) => `${value}`,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // 범례 숨기기
      },
      title: {
        display: false, // 제목 숨기기
      },
      datalabels: {
        display: true,
        align: 'end',
        formatter: (value: number) => value.toString(), // 수치 형식
        font: {
          size: 12, // 글자 크기
          weight: 'bold', // 글자 두께
        },
        color: 'white', // 글자 색상
      },
    },
  };

  return <Radar data={data} options={options} />;
};

export default BarChart;
