import React from 'react';
import { MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function About() {
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
          <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 text-center">Meet Emily</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a Licensed Professional Counselor with over 15 years of experience in a wide range of community 
                mental health settings. I've worked with children, adolescents, and adults in various outpatient clinics, 
                trauma-specific programs, and college-level counseling services.
              </p>
              <p>
                I hold a Masters in Clinical Mental Health Counseling from The University of Scranton and am licensed 
                in Pennsylvania (PC009992), New Jersey (37PC00984300), and Delaware (PC-0011544). I am a National 
                Certified Counselor (#347618) and certified in Eye Movement Desensitization Reprocessing (EMDR) and 
                Prolonged Exposure Therapy for PTSD with adults and adolescents through the Center for Treatment and 
                Study of Anxiety (CTSA) at the University of Pennsylvania. I am also trained in Trauma-Focused Cognitive 
                Behavioral Therapy (TF-CBT), Dialectical Behavioral Therapy (DBT), Recovery Oriented Cognitive Therapy 
                (CT-R), and Cognitive Behavioral Therapy (CBT).
              </p>
              <p>
                In addition to therapy, I provide individual supervision for pre-licensed counselors pursuing licensure 
                (LPC, LAPC, LCSW or LMFT) credentials.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-teal-700 mb-4 flex items-center">
                <MapPin className="mr-2" size={24} />
                In-Person Sessions
              </h2>
              <p className="text-gray-600">
                Andrews Counseling Services, LLC<br />
                390 Commerce Drive #117<br />
                Fort Washington, PA 19034
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-teal-700 mb-4">Telehealth Services</h2>
              <p className="text-gray-600">
                Available to clients in:<br />
                • Pennsylvania<br />
                • New Jersey<br />
                • Delaware
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}