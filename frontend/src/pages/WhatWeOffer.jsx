import React from 'react';
import { Code, ShieldCheck, Zap, BarChart } from 'lucide-react';

const WhatWeOffer = () => {
  const features = [
    {
      icon: <Zap size={24} className="text-yellow-400" />,
      title: "Lightning Fast Performance",
      description: "Experience unmatched speed with our optimized solutions designed to save you time and resources."
    },
    {
      icon: <ShieldCheck size={24} className="text-green-400" />,
      title: "Enterprise-Grade Security",
      description: "Your data is protected with industry-leading encryption and security protocols."
    },
    {
      icon: <Code size={24} className="text-blue-400" />,
      title: "Advanced Integration",
      description: "Seamlessly connect with your existing tools and workflows without any disruption."
    },
    {
      icon: <BarChart size={24} className="text-purple-400" />,
      title: "Detailed Analytics",
      description: "Gain valuable insights with comprehensive analytics and reporting features."
    }
  ];

  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-3">What We Offer</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive suite of solutions designed to elevate your digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all group"
            >
              <div className="bg-gray-800 rounded-full w-14 h-14 flex items-center justify-center mb-5 group-hover:bg-gray-700 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;