import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerStyle = {
    maxWidth: '1152px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <nav className='shadow-sm fixed w-full top-0 z-40' style={{ backgroundColor: 'rgb(25, 66, 66)' }}>
      <div
        style={containerStyle}
        className='px-4 sm:px-6 lg:px-8'
      >
        <div className='flex justify-between items-center h-16'>
          <Link
            to='/'
            className='text-xl font-serif text-white'
          >
            Emily Andrews, LPC
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-6'>
            <Link
              to='/'
              className='text-white hover:text-gray-200 transition'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='text-white hover:text-gray-200 transition'
            >
              About
            </Link>
            <Link
              to='/approach'
              className='text-white hover:text-gray-200 transition'
            >
              Approach
            </Link>

            <Link
              to='/what-i-treat'
              className='text-white hover:text-gray-200 transition'
            >
              What I Treat
            </Link>
            <Link
              to='/insurance'
              className='text-white hover:text-gray-200 transition'
            >
              Insurance
            </Link>
            <Link
              to='/appointments'
              className='text-white hover:text-gray-200 transition'
            >
              Appointments
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden text-white'
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className='md:hidden border-t' style={{ backgroundColor: 'rgb(25, 66, 66)' }}>
          <div className='px-4 py-3 space-y-3'>
            <Link
              to='/'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-white hover:text-gray-200'
            >
              Home
            </Link>
            <Link
              to='/approach'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-white hover:text-gray-200'
            >
              Approach
            </Link>
            <Link
              to='/about'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-white hover:text-gray-200'
            >
              About
            </Link>
            <Link
              to='/what-i-treat'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-white hover:text-gray-200'
            >
              What I Treat
            </Link>
            <Link
              to='/insurance'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-white hover:text-gray-200'
            >
              Insurance
            </Link>
            <Link
              to='/appointments'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-white hover:text-gray-200'
            >
              Appointments
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
