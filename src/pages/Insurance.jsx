import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Insurance() {
  const containerStyle = {
    maxWidth: '1152px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <section className="pt-24 pb-20 bg-slate-50">
        <div style={containerStyle} className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 text-center">Insurance & Fees</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-teal-700 mb-4">Accepted Insurance</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Highmark Blue Cross Blue Shield (and most Blue Cross plans)</li>
                <li>• Aetna (commercial plans)</li>
                <li>• Quest Behavioral Health</li>
                <li>• Independence Blue Cross (coming soon)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-teal-700 mb-4">Out-of-Network Support</h2>
              <p className="text-gray-600 mb-4">
                If I am not in-network with your plan, you may still be eligible for reimbursement. 
                I can provide documentation for out-of-network benefits.
              </p>
              <h3 className="font-semibold text-gray-900 mb-2">Session Fees</h3>
              <p className="text-gray-600">
                My rates align with local professionals. Reduced fee options are available for clients with financial need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}