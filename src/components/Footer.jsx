import React from 'react';

export default function Footer() {
  const containerStyle = {
    maxWidth: '1152px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <footer className='bg-gray-900 text-gray-300 py-12'>
      <div
        style={containerStyle}
        className='px-4 sm:px-6 lg:px-8'
      >
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h4 className='text-white font-semibold mb-3'>
              Emily Andrews, MS, NBCC #, LPC
            </h4>
            <p className='text-sm text-gray-400'>
              Licensed Professional Counselor Nationally Certified Counselor
            </p>
          </div>
          <div>
            <h4 className='text-white font-semibold mb-3'>Licenses</h4>
            <p className='text-sm text-gray-400'>
              Delaware: PC-0011544
              <br />
              New Jersey: 37PC00984300
              <br />
              Pennsylvania: PC009992
              <br />
              NCC: #347618
            </p>
          </div>
          <div>
            <h4 className='text-white font-semibold mb-3'>Certifications</h4>
            <p className='text-sm text-gray-400'>
              <br />
              EMDRIA Trained Provider
              <br />
              Certified in Prolonged Exposure (PE)
              <br />
              Member - American Counseling Association
              <br />
              Member - American Counseling Association
            </p>
          </div>
        </div>
        <div className='text-center pt-8 border-t border-gray-700'>
          <p className='text-sm text-gray-400'>
            © 2024 Andrews Counseling Services, LLC. All rights reserved.
          </p>
          <p className='text-xs text-gray-500 mt-2'>
            Masters in Clinical Mental Health Counseling, The University of
            Scranton
          </p>
        </div>
      </div>
    </footer>
  );
}
