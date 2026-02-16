import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  const containerStyle = {
    maxWidth: '1152px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return (
    <div className='min-h-screen bg-slate-50'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-16 bg-gradient-to-br from-teal-50 to-blue-50'>
        <div
          style={containerStyle}
          className='px-4 sm:px-6 lg:px-8 py-24 md:py-32'
        >
          <div className='text-center'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-6'>
              Compassionate, Trauma-Informed Therapy for Adults & Teens
            </h1>
            <p
              className='text-lg md:text-xl text-gray-600 mb-4'
              style={{
                maxWidth: '800px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Welcome. I’m Emily Andrews, a Licensed Professional Counselor, and
              I specialize in working with adolescents (ages 14+) and adults
              navigating trauma, anxiety, and grief. I provide a warm,
              supportive space where you can be authentically yourself—without
              pressure or judgment. Therapy can be a powerful step toward
              healing, and together we’ll explore, process, and integrate your
              experiences in a way that feels safe, collaborative, and grounded
              in evidence-based care.
            </p>
            <p className='text-lg text-gray-600 mb-8'>
              Offering both in-person sessions in Fort Washington, PA and
              telehealth across Pennsylvania, New Jersey, and Delaware.
            </p>
            <Link
              to='/appointments'
              className='inline-block bg-teal-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-teal-700 transition shadow-lg'
            >
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
