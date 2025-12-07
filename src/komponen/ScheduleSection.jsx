// src/components/ScheduleSection.jsx
import React from 'react';

function ScheduleSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-2 text-center">Jadwal & Program Kegiatan</h2>
        <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan pengembangan skill Setiap Sabtu
        </p>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14" />
            </svg>
            <h3 className="text-xl font-semibold text-blue-800">Setiap Sabtu</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3-3m6 6l-6-6-6 6" />
                </svg>
                <h4 className="font-semibold">Sesi Pagi</h4>
              </div>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3-3m6 6l-6-6-6 6" />
                </svg>
                <span className="font-medium">09.00 - 12.00 WIB</span>
              </div>
              <p className="text-sm text-gray-700">Workshop, Career Talks, dan Extra Classes intensif</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-green-100 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3-3m6 6l-6-6-6 6" />
                </svg>
                <h4 className="font-semibold">Sesi Sore</h4>
              </div>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3-3m6 6l-6-6-6 6" />
                </svg>
                <span className="font-medium">16.00 - 19.00 WIB</span>
              </div>
              <p className="text-sm text-gray-700">Project Work, Mentoring, dan Collaboration Session</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Career Talks", icon: "💬", description: "Sesi sharing dari praktisi industri dan alumni sukses", color: "bg-yellow-200" },
            { title: "Extra Classes", icon: "📚", description: "Kelas tambahan skill development dan workshop teknis", color: "bg-green-200" },
            { title: "Project Work", icon: "<>", description: "Mengerjakan project nyata dengan bimbingan mentor", color: "bg-blue-200" },
            { title: "Mentoring", icon: "👥", description: "Sesi konsultasi personal dengan mentor berpengalaman", color: "bg-pink-200" }
          ].map((item, index) => (
            <div key={index} className={`${item.color} p-6 rounded-xl shadow-md flex flex-col items-center text-center`}>
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScheduleSection;