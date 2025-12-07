// src/komponen/ProjectCard.jsx
import React from 'react';

function ProjectCard() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            UI/UX Design
          </span>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Creative Portfolio Platform</h3>
          <p className="text-gray-600 mb-4">
            Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas
          </p>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Tim Pembuat :</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img src="/src/aset/fotoprofilBudi.jpg" alt="Avatar" className="w-8 h-8 rounded-full" />
                <div>
                  <div className="font-medium">Budi Santoso</div>
                  <div className="text-sm text-gray-600">Frontend Developer</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src="/src/aset/fotoprofilBudi.jpg" alt="Avatar" className="w-8 h-8 rounded-full" />
                <div>
                  <div className="font-medium">Budi Santoso</div>
                  <div className="text-sm text-gray-600">Frontend Developer</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <img src="/src/aset/fotoprofilBudi.jpg" alt="Avatar" className="w-8 h-8 rounded-full" />
                <div>
                  <div className="font-medium">Budi Santoso</div>
                  <div className="text-sm text-gray-600">Frontend Developer</div>
                </div>
              </div>
            </div>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6v6m-11-5L21 21" />
            </svg>
            Live Demo
          </button>
        </div>
        <div className="md:w-2/3">
          <img 
            src="/src/aset/team.jpg" 
            alt="Team Collaboration" 
            className="w-full h-auto rounded-xl border-4 border-pink-400"
          />
        </div>
      </div>
      
      {/* Panah Navigasi */}
      <div className="flex justify-between mt-6">
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;