'use client';

import { FC } from 'react';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { FaUserShield, FaSync } from 'react-icons/fa'; // 아이콘 추가

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onClose} 
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button className="absolute top-4 right-4 text-xl" onClick={onClose}>
          &times; 
        </button>
        <nav className="flex flex-col mt-10">
          <Link href="/" className="flex items-center p-4 hover:bg-gray-700 transition" onClick={onClose}>
            <AiFillHome className="mr-2" />
            홈
          </Link>
          <Link href="/champions" className="flex items-center p-4 hover:bg-gray-700 transition" onClick={onClose}>
            <FaUserShield className="mr-2" /> {/* 챔피언 소개 아이콘 */}
            챔피언 소개
          </Link>
          <Link href="/rotation" className="flex items-center p-4 hover:bg-gray-700 transition" onClick={onClose}>
            <FaSync className="mr-2" /> {/* 캐릭터 로테이션 아이콘 */}
            캐릭터 로테이션
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;