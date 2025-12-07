// src/komponen/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8"> {/* ✅ Ini yang membuat konten di tengah */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Kolom 1: Logo & Deskripsi */}
          <div>
            <img 
              src="/src/aset/logo2footer.png" 
              alt="Ruang Ekspresi Logo" 
              className="h-10 w-auto mb-2"
            />
            <img 
              src="/src/aset/ruangekspresifooter.png" 
              alt="Ruang Ekspresi Logo" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm mb-4">
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin mengembangkan potensi melalui ideation, creation, collaboration, dan guidance.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.995 1.995 0 01-2.828 0l-4.244-4.244a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55191</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 6.29a2 2 0 002.22 0L21 8M5 19h14v2H5v-2z" />
                </svg>
                <span>ruang_ekspresi@webmail.uad.ac.id</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95l-1.714.857a1 1 0 01-.864.575 1 1 0 01-.864-.575l-1.714-.857A1 1 0 013 5zm12 0a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95l-1.714.857a1 1 0 01-.864.575 1 1 0 01-.864-.575l-1.714-.857A1 1 0 0115 5zm12 0a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95l-1.714.857a1 1 0 01-.864.575 1 1 0 01-.864-.575l-1.714-.857A1 1 0 0127 5z" />
                </svg>
                <span>(0274) 511830</span>
              </div>
            </div>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Program', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              {['Career Talks', 'Extra Classes', 'Project Work', 'Mentoring'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>        
        </div>

        <div className="border-t border-blue-700 mt-8 pt-4 text-center text-sm">
          © 2025 Ruang Ekspresi | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;