import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Appointments() {
  const containerStyle = {
    maxWidth: '1152px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-white">
        <div style={containerStyle} className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 text-center">Start Your Journey</h1>
          <p className="text-xl text-gray-600 mb-8 text-center" style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            Ready to take the next step? I offer a free 15-minute consultation to help determine if we're a good fit.
          </p>
          
          <div className="text-center mb-12">
            <a 
              href="#" 
              className="inline-block text-white px-8 py-3 rounded-lg text-lg transition shadow-lg"
              style={{
                backgroundColor: 'rgb(25, 66, 66)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(18, 50, 50)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(25, 66, 66)'}
            >
              Schedule through SimplePractice
            </a>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Client Portal</h2>
            <p className="text-gray-600 mb-6">
              Current clients can use the SimplePractice portal to schedule and view appointments, 
              complete forms, and securely message me.
            </p>
            <a 
              href="https://emilyandrews.clientsecure.me" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Log In to Client Portal
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}