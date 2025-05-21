import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 order-1">
            <NavLink to="/" currentPath={location.pathname}>
              Accueil
            </NavLink>
            <NavLink to="/about" currentPath={location.pathname}>
              À Propos
            </NavLink>
            <NavLink to="/contact" currentPath={location.pathname}>
              Contact
            </NavLink>
          </nav>

          <Link
            to="/"
            className="flex items-center space-x-2 order-2 transform transition-transform duration-300 hover:scale-105"
            onClick={closeMenu}
          >
            <img src="/logo.jpg" alt="IN OPTIC Logo" className="h-16 w-auto rounded-lg shadow-md" />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-blue-800 focus:outline-none order-1"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        } bg-white shadow-lg overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-3">
            <MobileNavLink to="/" onClick={closeMenu} currentPath={location.pathname}>
              Accueil
            </MobileNavLink>
            <MobileNavLink to="/about" onClick={closeMenu} currentPath={location.pathname}>
              À Propos
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={closeMenu} currentPath={location.pathname}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  currentPath: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;
  
  return (
    <Link
      to={to}
      className={`transition-colors duration-300 font-medium ${
        isActive
          ? 'text-blue-600 border-b-2 border-blue-600 font-bold'
          : 'text-gray-700 hover:text-blue-600 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full'
      }`}
    >
      {children}
    </Link>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  to,
  onClick,
  currentPath,
  children,
}) => {
  const isActive = currentPath === to;
  
  return (
    <Link
      to={to}
      className={`block py-2 px-4 rounded-lg transition-colors ${
        isActive
          ? 'bg-blue-50 text-blue-700 font-medium'
          : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Header;