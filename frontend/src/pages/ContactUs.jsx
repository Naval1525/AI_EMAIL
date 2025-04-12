import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-3">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions or ready to get started? Our team is here to help you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-gray-900 rounded-xl p-8 border border-gray-700">
            <h3 className="text-white text-xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 text-sm">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2 text-sm">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 mb-2 text-sm">Message</label>
                <textarea 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white h-32 focus:outline-none focus:border-blue-500"
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>
              
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center">
                Send Message <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start">
                <div className="bg-gray-800 rounded-full p-3 mr-4">
                  <Mail size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-400">info@yourcompany.com</p>
                  <p className="text-gray-400">support@yourcompany.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start">
                <div className="bg-gray-800 rounded-full p-3 mr-4">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-400">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start">
                <div className="bg-gray-800 rounded-full p-3 mr-4">
                  <MapPin size={20} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-400">
                    123 Business Avenue<br />
                    Suite 400<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;