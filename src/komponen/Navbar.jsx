import React from 'react';
import logo1Image from '/src/aset/logo1.png';
import logoruangekspresiImage from '/src/aset/logoruangekspresi.png'
import textImage from '/src/aset/logoruangekspresi.png';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/src/aset/logo1.png" 
              alt="Ruang Ekspresi Logo" 
              className="h-8 w-auto mr-2"
            />
            <img 
                src={textImage} 
                alt="Ruang Ekspresi" 
                className="h-8 w-auto"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'About', 'Program', 'Project', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;