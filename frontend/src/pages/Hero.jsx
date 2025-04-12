import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-blue-400">Revolutionize</span> Your Digital Experience
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Transform the way you interact with technology. Our innovative solutions bring efficiency and elegance to your digital workflow.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center">
                Get Started <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="border border-gray-600 hover:border-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 relative">
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-purple-500 rounded-full opacity-20"></div>
              <div className="relative bg-gray-700 h-64 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20"></div>
                <div className="flex justify-center items-center h-full text-gray-400">
                  <p className="text-center">Featured Product Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;