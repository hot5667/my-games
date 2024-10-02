import SidebarToggle from './components/sidebar/SidebarToggle';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <SidebarToggle>
      {children}
    </SidebarToggle>
  );
}

export default Layout;