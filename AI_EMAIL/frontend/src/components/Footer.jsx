// import React from 'react';
// import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight, Heart } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-black text-white">
//       {/* Main Footer */}
//       <div className="container mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//           {/* Company Info */}
//           <div>
//             <div className="flex items-center mb-6">
//               <span className="text-2xl font-bold text-white">AI</span>
//               <span className="text-2xl font-bold ml-1 text-blue-400">EMAIL</span>
//             </div>
//             <p className="mb-6 text-gray-300">
//               Delivering innovative solutions that transform businesses and empower users.
//               Our mission is to create technology that makes a difference.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
//                 <Linkedin size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
//             <ul className="space-y-3">
//               {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'FAQ'].map((item, index) => (
//                 <li key={index}>
//                   <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
//                     <ArrowRight size={16} className="mr-2" />
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-white text-lg font-semibold mb-6">Contact Us</h3>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <MapPin size={20} className="text-blue-400 mr-3 mt-1" />
//                 <span className="text-gray-300">123 Innovation Street, Tech City, CA 90210</span>
//               </li>
//               <li className="flex items-center">
//                 <Phone size={20} className="text-blue-400 mr-3" />
//                 <span className="text-gray-300">+1 (555) 123-4567</span>
//               </li>
//               <li className="flex items-center">
//                 <Mail size={20} className="text-blue-400 mr-3" />
//                 <span className="text-gray-300">contact@acmetech.com</span>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-white text-lg font-semibold mb-6">Stay Updated</h3>
//             <p className="mb-4 text-gray-300">Subscribe to our newsletter to get the latest updates and news.</p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-blue-400 text-white"
//               />
//               <button className="bg-white hover:bg-gray-200 text-black px-4 rounded-r-lg transition-colors">
//                 <ArrowRight size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer Divider */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-6 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0 text-gray-300">
//               <p>&copy; {currentYear} ACME Tech. All rights reserved.</p>
//             </div>
//             <div className="flex items-center text-gray-300">
//               <p>Made with <Heart size={16} className="text-red-600 mx-1 inline" /> by AIEML Team</p>
//             </div>
//             <div className="mt-4 md:mt-0">
//               <ul className="flex space-x-6">
//                 <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</a></li>
//                 <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Cookies</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">AI</span>
              <span className="text-2xl font-bold ml-1 text-blue-400">
                EMAIL
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Delivering innovative solutions that empower users and businesses
              alike.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/codeandcringe?igsh=cmtpbXlkeXlyaDl3&utm_source=qr"
                aria-label="Instagram"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@CodingCringe"
                aria-label="Youtube"
                className="p-2 rounded-full bg-gray-800 hover:bg-sky-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/adityamaurya28/"
                aria-label="Linkdin"
                className="p-2 rounded-full bg-gray-800 hover:bg-pink-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/navalbihani15"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span>codingxcringe@gmail.com</span>
              </li>

              <li className="flex items-center space-x-2">
                <MapPin size={18} />
                <span>Bennett University</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Get the latest updates and offers.
            </p>
            <form className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md text-black mb-3 sm:mb-0 sm:mr-2"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {currentYear} AIEMAIL. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
