import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Description */}
          <div className="space-y-4">
            <Link to="/" className="text-3xl font-bold text-white">
              PowerX
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              We are an architectural and interior design firm based in the UAE and operating worldwide. 
              We have delivered a number of creative interiors for hospitality, healthcare, office, 
              retail and residential spaces, from design concept to handover.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/project" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300 hover:pl-2 block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">GET IN TOUCH</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <h4 className="font-medium text-white mb-1">PowerX Exhibition Stand Fitting and Execution LLC</h4>
                <p className="leading-relaxed">
                  Warehouse Number 4, 5, 6<br />
                  Dubai Investment Park First<br />
                  P.O. Box 390077 – Dubai, UAE
                </p>
              </li>
              <li>
                <p><span className="font-medium">Mobile:</span> +971 4 880 8890</p>
                <p><span className="font-medium">Phone:</span> +971 50 657 0757</p>
              </li>
              <li>
                <p><span className="font-medium">Email:</span> info@PowerX.com</p>
              </li>
            </ul>
          </div>

          {/* Contact Form / Call to Action */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">START YOUR PROJECT</h3>
            <p className="text-gray-300 text-sm">
              Ready to transform your space? Get in touch with our expert team for a consultation.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div>
              © Copyright {new Date().getFullYear()} - PowerX Exhibition Stand Fitting and Execution LLC. All rights reserved.
            </div>
            <div className="mt-2 md:mt-0">
              <p>UAE | Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;