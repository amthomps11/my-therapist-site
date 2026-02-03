import React from 'react';
import { CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Approach() {
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
          <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 text-center">How I Work</h1>
          <p className="text-xl text-gray-600 mb-12 text-center italic" style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
            Therapy can be difficult, but growth comes from courageously exploring and understanding your story. 
            I walk with you through that process.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-teal-700 mb-4">My Philosophy</h2>
            <p className="text-gray-600 leading-relaxed">
              My approach to therapy is relational, collaborative, eclectic, and grounded in evidence-based practice. 
              I create a space where you feel safe, understood, and supported.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-teal-700 mb-6">Modalities I Use</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">Prolonged Exposure Therapy (PE)</p>
                  <p className="text-sm text-gray-600">Certified</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-gray-900">EMDR</p>
                  <p className="text-sm text-gray-600">EMDRIA-trained, certification in-process</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                <p className="font-semibold text-gray-900">Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                <p className="font-semibold text-gray-900">Recovery-Oriented Cognitive Therapy (CT-R)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                <p className="font-semibold text-gray-900">Dialectical Behavior Therapy (DBT)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                <p className="font-semibold text-gray-900">Acceptance and Commitment Therapy (ACT)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                <p className="font-semibold text-gray-900">Psychodynamic</p>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-teal-700 mb-3">Special Population</h2>
            <p className="text-gray-600 leading-relaxed">
              I especially enjoy working with adolescents and young adults as they navigate identity, relationships, 
              and stressors unique to this life stage.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}