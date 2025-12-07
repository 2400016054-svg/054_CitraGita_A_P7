// src/components/PillarSection.jsx
import React from 'react';

function PillarSection() {
  const pillars = [
    {
      title: "Ideation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 16.364-.707-.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.",
      color: "bg-yellow-200"
    },
    {
      title: "Creation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-.426 1.038-.426 1.464 0l1.591 1.591c1.563 1.563 3.296 2.345 5.188 2.345 1.893 0 3.626-.782 5.188-2.345l1.591-1.591c.426-.426 1.038-.426 1.464 0 .426.426.426 1.038 0 1.464l-1.591 1.591c-1.563 1.563-2.345 3.296-2.345 5.188s.782 3.626 2.345 5.188l1.591 1.591c.426.426.426 1.038 0 1.464-.426.426-1.038.426-1.464 0l-1.591-1.591c-1.563-1.563-3.296-2.345-5.188-2.345s-3.626.782-5.188 2.345l-1.591 1.591c-.426.426-1.038.426-1.464 0-.426-.426-.426-1.038 0-1.464l1.591-1.591c1.563-1.563 2.345-3.296 2.345-5.188s-.782-3.626-2.345-5.188l-1.591-1.591c-.426-.426-.426-1.038 0-1.464z" />
        </svg>
      ),
      description: "Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.",
      color: "bg-green-200"
    },
    {
      title: "Collaboration",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h-2c1.103 0 2-.897 2-2V6M3 6h2c-.63 0-1.237.24-1.697.697A2 2 0 003 8v12c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V6M3 6h2c1.103 0 2-.897 2-2V2m2 2v12c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V6M3 6h2c1.103 0 2-.897 2-2V2m2 2v12c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V6" />
        </svg>
      ),
      description: "Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.",
      color: "bg-blue-200"
    },
    {
      title: "Guidance & Support",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2v-7h6l2 2h6v7a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7m10 0v-2a3 3 0 00-5.356-1.857M17 12H12M17 12v-2a3 3 0 00-5.356-1.857M12 12v-2a3 3 0 00-5.356-1.857M17 12H12M12 12v-2a3 3 0 00-5.356-1.857M12 12v-2a3 3 0 00-5.356-1.857M12 12v-2a3 3 0 00-5.356-1.857" />
        </svg>
      ),
      description: "Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.",
      color: "bg-pink-200"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Empat Pilar Ruang Ekspresi</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index} className={`${pillar.color} p-6 rounded-xl shadow-md flex flex-col items-center text-center`}>
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
              <p className="text-gray-700 text-sm">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PillarSection;