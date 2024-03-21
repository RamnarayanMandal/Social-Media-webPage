import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 font-sans md:font-serif ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-4">
            <h3 className="text-lg  mb-2">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor risus nec urna interdum, in mollis eros consectetur.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg  mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg  mb-2">Follow Us</h3>
            <ul>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
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
      <div className="text-center mt-6">
        <p>&copy; 2024 Social Media. All rights reserved.</p>
      </div>
    </footer>
  );
}
