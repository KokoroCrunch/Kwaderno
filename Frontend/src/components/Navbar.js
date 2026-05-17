import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Location', path: '/location' },
    { name: 'Menu', path: '/menu' },
    { name: 'Social', path: '/social' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-kwaderno-brown text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.jpg" alt="Kwaderno Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold font-serif">Kwaderno</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`hover:text-kwaderno-light transition-colors ${
                  isActive(link.path) ? 'text-kwaderno-light font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin/login"
              className="hover:text-kwaderno-light transition-colors"
            >
              Admin
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-kwaderno-dark"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 hover:bg-kwaderno-dark transition-colors ${
                  isActive(link.path) ? 'bg-kwaderno-dark text-kwaderno-light' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admin/login"
              onClick={() => setIsOpen(false)}
              className="block py-2 px-4 hover:bg-kwaderno-dark transition-colors"
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
