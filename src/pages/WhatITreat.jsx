import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function WhatITreat() {
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
          <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 text-center">What I Treat</h1>
          <p className="text-center text-gray-600 mb-8">
            I provide therapy for individuals aged 14 and older. Areas of focus include:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-600">
                <li>• PTSD and complex trauma</li>
                <li>• Anxiety (GAD, panic attacks, phobias)</li>
                <li>• Grief and loss</li>
                <li>• Adjustment disorders</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-600">
                <li>• School and college-related stress</li>
                <li>• Life transitions</li>
                <li>• Identity development</li>
                <li>• Emotional dysregulation</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <ul className="space-y-2 text-gray-600">
                <li>• Family of origin issues</li>
                <li>• Family members of individuals with SMI</li>
                <li>• Adult children of alcoholics</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">What I Refer Out</h2>
            <p className="text-gray-600 mb-3">
              I refer clients to other professionals or higher levels of care for the following:
            </p>
            <ul className="text-gray-600 space-y-1">
              <li>• Active substance use requiring detox/inpatient treatment</li>
              <li>• Eating disorders with medical complications</li>
              <li>• Unmanaged psychosis or schizophrenia</li>
              <li>• Severe personality disorders requiring IOP/PHP</li>
              <li>• Specialized testing (i.e. ADHD evaluations, custody evaluations)</li>
              <li>• Medication management</li>
              <li>• Couples or family therapy</li>
              <li>• Children under 14</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}