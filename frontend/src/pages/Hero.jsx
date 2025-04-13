import React from 'react';
import { ArrowRight } from 'lucide-react';
import assets from "../assets/assets.js"


const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-black to-white text-white min-h-screen flex items-center">
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
              <button className="bg-white hover:bg-gray-200 text-black font-medium py-3 px-6 rounded-lg transition-colors flex items-center">
                Get Started <ArrowRight size={18} className="ml-2" />
              </button>
              <button className="border border-white hover:bg-white hover:text-black text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-black p-8 rounded-2xl shadow-xl border border-gray-800 relative">
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-white rounded-full opacity-50"></div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-blue-400 rounded-full opacity-50"></div>
              <div className="relative bg-white h-64 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-black/20"></div>
                <div className="flex justify-center items-center h-full text-gray-500">
                  <img src={assets.top} alt="Featured Product Demo" />
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