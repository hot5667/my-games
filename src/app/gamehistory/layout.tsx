// src/components/Layout.tsx
import SidebarToggle from './components/sidebar/SidebarToggle';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SidebarToggle>
      {children}
    </SidebarToggle>
  );
};

export default Layout;
