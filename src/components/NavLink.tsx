// components/NavLink.tsx
import Link from 'next/link';

interface NavLinkProps {
     href: string;
     children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
     return (
          <li>
               <Link href={href} className="nav-link group">
                    {children}
                    <span className="nav-link-line"></span>
               </Link>
          </li>
     );
};

export default NavLink;