'use client';

import { AiOutlineRight } from 'react-icons/ai';
import Sidebar from './Sidebar';
import useSidebarStore from '../../../../store/sidebarStore';

interface SidebarToggleProps {
  children: React.ReactNode;
}

function SidebarToggle({ children }: SidebarToggleProps) {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <div>
      <button
        onClick={toggleSidebar}
        className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center bg-blue-800 text-yellow-300 px-2 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        style={{
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
        }}
      >
        <AiOutlineRight className="text-3xl mb-1" />
        <span className="text-[12px]">메뉴</span>
      </button>
      <Sidebar isOpen={isOpen} onClose={toggleSidebar} />
      <main>{children}</main>
    </div>
  );
}

export default SidebarToggle;