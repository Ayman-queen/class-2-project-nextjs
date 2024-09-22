import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold">
          Home
        </Link>
        <div>
          <Link href="/About" className="ml-4">
            About
          </Link>
          <Link href="/projects" className="ml-4">
            Projects
          </Link>
          <Link href="/Contact" className="ml-4">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
