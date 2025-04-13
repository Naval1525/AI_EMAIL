import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">AI</span>
              <span className="text-2xl font-bold ml-1 text-blue-400">EMAIL</span>
            </div>
            <p className="mb-6 text-gray-300">
              Delivering innovative solutions that transform businesses and empower users. 
              Our mission is to create technology that makes a difference.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'FAQ'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                    <ArrowRight size={16} className="mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-3 mt-1" />
                <span className="text-gray-300">123 Innovation Street, Tech City, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-400 mr-3" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-400 mr-3" />
                <span className="text-gray-300">contact@acmetech.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="mb-4 text-gray-300">Subscribe to our newsletter to get the latest updates and news.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-blue-400 text-white"
              />
              <button className="bg-white hover:bg-gray-200 text-black px-4 rounded-r-lg transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Divider */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-gray-300">
              <p>&copy; {currentYear} ACME Tech. All rights reserved.</p>
            </div>
            <div className="flex items-center text-gray-300">
              <p>Made with <Heart size={16} className="text-red-600 mx-1 inline" /> by AIEML Team</p>
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;