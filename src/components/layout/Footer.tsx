import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-bold text-xl text-primary">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Swati
              </span>
            </Link>
            <p className="text-gray-600 mt-2">Human Resource Partner</p>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-12">
            <div className="mb-6 md:mb-0">
              <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-primary transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-primary transition-colors duration-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/skills" className="text-gray-600 hover:text-primary transition-colors duration-200">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-gray-600 hover:text-primary transition-colors duration-200">
                    Work
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-primary w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-primary w-5 h-5" />
                </a>
                <a 
                  href="mailto:swati@example.com" 
                  className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-primary w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Swati. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Designed with passion and purpose
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
