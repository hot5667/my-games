'use client'

import { useEffect, useState } from 'react';

const Loading = () => {
  const [loadingText, setLoadingText] = useState('로딩 중');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText((prev) => (prev.length < 10 ? prev + '...' : '로딩 중'));
    }, 500); // 0.5초마다 '...' 추가

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin h-10 w-10 border-4 border-t-transparent border-blue-600 rounded-full"></div>
      <p className="ml-4 text-xl text-gray-700">{loadingText}</p>
    </div>
  );
};

export default Loading;
