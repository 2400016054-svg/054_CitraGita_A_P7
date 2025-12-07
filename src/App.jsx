// src/App.jsx
import React from 'react';
import './App.css';
import Navbar from './komponen/Navbar';
import HeroSection from './komponen/HeroSection';
import PillarSection from './komponen/PillarSection';
import ScheduleSection from './komponen/ScheduleSection';
import ProjectCard from './komponen/ProjectCard';
import Testimoni from './komponen/Testimoni';
import Footer from './komponen/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <PillarSection />
      <ScheduleSection />

      {/* Showcase Student Projects */}
      <section className="py-16 px-4 md:px-8 bg-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 text-center">
            Showcase Student Projects
          </h2>
          <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Karya-karya inovatif yang telah dihasilkan oleh mahasiswa dalam program Ruang Ekspresi
          </p>
          <ProjectCard />
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <Testimoni key={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;