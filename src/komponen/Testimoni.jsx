import React from 'react';

function Testimoni() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img 
          src="/src/aset/fotoprofilBudi.jpg" 
          alt="Student Avatar" 
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h3 className="text-xl font-bold text-gray-900">Budi Santoso</h3>
          <p className="text-blue-600 text-sm">Mahasiswa Sistem Informasi</p>
        </div>
      </div>
      <p className="text-gray-700">
        Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain.
      </p>
    </div>
  );
}

export default Testimoni;