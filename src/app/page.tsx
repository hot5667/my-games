'use client'

import { motion } from 'framer-motion';

const MainPage = () => {
  return (
    <div className="container mx-auto p-4">
      <motion.h1 
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
      >
        롤 백과사전
      </motion.h1>
      <motion.p 
        className="text-lg text-center text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }} 
      >
        롤과 관련된 아이템 챔피언 정보를 확인 하실 수 있습니다.
      </motion.p>
    </div>
  );
};

export default MainPage;
