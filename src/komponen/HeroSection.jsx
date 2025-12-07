import React from 'react';
import teamImage from '/src/aset/team.jpg';

function HeroSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            RUANG EKSPRESI :
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-black-800 mb-4">
            Wadah kreatif & Kompetitif Mahasiswa
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              { name: 'Ideation', color: 'bg-yellow-200 text-yellow-800' },
              { name: 'Creation', color: 'bg-green-200 text-green-800' },
              { name: 'Collaboration', color: 'bg-blue-200 text-blue-800' },
              { name: 'Guidance & Support', color: 'bg-pink-200 text-pink-800' }
            ].map((tag, index) => (
              <span key={index} className={`px-4 py-2 rounded-full text-sm font-medium ${tag.color}`}>
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="/src/aset/team.jpg" 
            alt="Students Collaborating" 
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;