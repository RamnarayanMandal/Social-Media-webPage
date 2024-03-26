import React from 'react';

export default function Footer() {
  return (
    <footer className="text-gray-800  font-sans md:font-serif relative overflow-hidden">
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f3f4f5" fillOpacity="1" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,197.3C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <div className='bg-gray-100 relative z-10'>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="mb-4">
              <h3 className="text-lg  mb-2">About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className="mb-4">
              <h3 className="text-lg  mb-2">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:text-green-500">Home</a></li>
                <li><a href="#" className="hover:text-green-500">About</a></li>
                <li><a href="#" className="hover:text-green-500">Contact</a></li>
                <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg  mb-2">Follow Us</h3>
              <ul>
                <li><a href="#" className="hover:text-green-500">Facebook</a></li>
                <li><a href="#" className="hover:text-green-500">Twitter</a></li>
                <li><a href="#" className="hover:text-green-500">Instagram</a></li>
                <li><a href="#" className="hover:text-green-500">LinkedIn</a></li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-lg  mb-2">Contact Us</h3>
              <p>123 Street, City, Country</p>
              <p>Email: info@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-800 text-white h-20 flex justify-center items-center content-center">
        <p>&copy; 2024 Social Media. All rights reserved.</p>
      </div>
    </footer>
  );
}
