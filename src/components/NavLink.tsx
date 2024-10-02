// components/NavLink.tsx
import Link from 'next/link';

interface NavLinkProps {
     href: string;
     children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
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