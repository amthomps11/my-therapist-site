import React from 'react';
import { MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import emilyImage from '../assets/emily.jpeg';

export default function About() {
  const containerStyle = {
    maxWidth: '1152px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <div className='min-h-screen bg-slate-50'>
      <Navigation />

      <section className='pt-24 pb-20 bg-slate-50'>
        <div
          style={containerStyle}
          className='px-4 sm:px-6 lg:px-8'
        >
          <h1 className='text-3xl md:text-4xl font-serif text-gray-900 mb-8 text-center'>
            Meet Emily
          </h1>

          <div className='bg-white p-8 rounded-lg shadow-sm mb-8'>
            <div className='grid md:grid-cols-2 gap-8 items-start'>
              <div className='space-y-4 text-gray-600 leading-relaxed'>
                <p>Hi! I'm Emily.</p>
                <p>
                  I’m a Licensed Professional Counselor with over 15 years of
                  experience across a wide range of community mental health
                  settings. Throughout my career, I’ve worked with children,
                  adolescents, and adults in outpatient clinics, trauma-specific
                  programs, and college counseling services. These experiences
                  have shaped the way I show up in the therapy room — grounded,
                  flexible, and deeply attuned to the complexity of each
                  person’s story.
                </p>
                <p>
                  I earned my Master’s degree in Clinical Mental Health
                  Counseling from The University of Scranton and am licensed in
                  Pennsylvania (PC009992), New Jersey (37PC00984300), and
                  Delaware (PC-0011544). I am a National Certified Counselor
                  (#347618) and certified in Eye Movement Desensitization and
                  Reprocessing (EMDR) and Prolonged Exposure Therapy for PTSD
                  through the Center for Treatment and Study of Anxiety (CTSA)
                  at the University of Pennsylvania. I am also trained in
                  Trauma-Focused Cognitive Behavioral Therapy (TF-CBT),
                  Dialectical Behavioral Therapy (DBT), Recovery-Oriented
                  Cognitive Therapy (CT-R), and Cognitive Behavioral Therapy
                  (CBT).
                </p>
                <p>
                  In addition to providing therapy, I offer individual
                  supervision for pre-licensed counselors pursuing LPC, LAPC,
                  LCSW, or LMFT licensure.
                </p>
                <p>
                  Outside of sessions, I’m a passionate concert-goer, music
                  lover, foodie, and pop culture enthusiast. I love to travel,
                  explore new places, and recharge by being grounded in nature.
                  These parts of me matter — because I believe therapy works
                  best when you’re sitting across from a real human, not just a
                  list of credentials.
                </p>
              </div>
              <div className='flex justify-center'>
                <img
                  src={emilyImage}
                  alt='Emily'
                  className='rounded-lg shadow-md w-full max-w-sm object-cover'
                />
              </div>
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
              <h2 className='text-xl font-semibold mb-4 flex items-center' style={{ color: 'rgb(25, 66, 66)' }}>
                <MapPin
                  className='mr-2'
                  size={24}
                />
                In-Person Sessions
              </h2>
              <p className='text-gray-600'>
                Be Well Office Suites 390 Commerce Drive Fort
                <br />
                Washington, PA
                <br />
                19034 Andrews Counseling Services
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-sm'>
              <h2 className='text-xl font-semibold mb-4' style={{ color: 'rgb(25, 66, 66)' }}>
                Telehealth Services
              </h2>
              <p className='text-gray-600'>
                Available to clients in:
                <br />
                • Pennsylvania
                <br />
                • New Jersey
                <br />• Delaware
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
