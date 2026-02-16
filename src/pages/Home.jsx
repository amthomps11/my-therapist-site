import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import landscapeImage from '../assets/landscape.JPG';

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
      <section className='relative pt-16 overflow-hidden'>
        <img
          src={landscapeImage}
          alt='Nature landscape'
          className='absolute inset-0 w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/40' />
        <div
          style={containerStyle}
          className='relative px-4 sm:px-6 lg:px-8 py-24 md:py-32'
        >
          <div className='text-center'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6 drop-shadow-lg'>
              Compassionate, Trauma-Informed Therapy for Adults & Teens
            </h1>
            <p
              className='text-lg md:text-xl text-white mb-4 drop-shadow-md'
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
            <p className='text-lg text-white mb-8 drop-shadow-md'>
              Offering both in-person sessions in Fort Washington, PA and
              telehealth across Pennsylvania, New Jersey, and Delaware.
            </p>
            <Link
              to='/appointments'
              className='inline-block text-white px-8 py-3 rounded-lg text-lg transition shadow-lg'
              style={{
                backgroundColor: 'rgb(25, 66, 66)',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(18, 50, 50)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(25, 66, 66)'}
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
