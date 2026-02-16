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
    <nav className='bg-white shadow-sm fixed w-full top-0 z-40'>
      <div
        style={containerStyle}
        className='px-4 sm:px-6 lg:px-8'
      >
        <div className='flex justify-between items-center h-16'>
          <Link
            to='/'
            className='text-xl font-serif text-teal-700'
          >
            Emily Andrews, LPC
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-6'>
            <Link
              to='/'
              className='text-gray-700 hover:text-teal-600 transition'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='text-gray-700 hover:text-teal-600 transition'
            >
              About
            </Link>
            <Link
              to='/approach'
              className='text-gray-700 hover:text-teal-600 transition'
            >
              Approach
            </Link>

            <Link
              to='/what-i-treat'
              className='text-gray-700 hover:text-teal-600 transition'
            >
              What I Treat
            </Link>
            <Link
              to='/insurance'
              className='text-gray-700 hover:text-teal-600 transition'
            >
              Insurance
            </Link>
            <Link
              to='/appointments'
              className='text-gray-700 hover:text-teal-600 transition'
            >
              Appointments
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='md:hidden text-gray-700'
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className='md:hidden bg-white border-t'>
          <div className='px-4 py-3 space-y-3'>
            <Link
              to='/'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-gray-700 hover:text-teal-600'
            >
              Home
            </Link>
            <Link
              to='/approach'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-gray-700 hover:text-teal-600'
            >
              Approach
            </Link>
            <Link
              to='/about'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-gray-700 hover:text-teal-600'
            >
              About
            </Link>
            <Link
              to='/what-i-treat'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-gray-700 hover:text-teal-600'
            >
              What I Treat
            </Link>
            <Link
              to='/insurance'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-gray-700 hover:text-teal-600'
            >
              Insurance
            </Link>
            <Link
              to='/appointments'
              onClick={() => setMobileMenuOpen(false)}
              className='block text-gray-700 hover:text-teal-600'
            >
              Appointments
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
