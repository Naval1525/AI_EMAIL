import React from "react";
import { Search, Lightbulb, Settings, Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search size={28} className="text-blue-400" />,
      title: "Discover",
      description:
        "Tell us about your goals and requirements so we can understand your needs perfectly.",
      color: "bg-blue-500",
    },
    {
      icon: <Lightbulb size={28} className="text-yellow-400" />,
      title: "Plan",
      description:
        "Our experts will create a customized strategy tailored to your specific situation.",
      color: "bg-yellow-500",
    },
    {
      icon: <Settings size={28} className="text-purple-400" />,
      title: "Implement",
      description:
        "Our team works diligently to implement the solution with minimal disruption.",
      color: "bg-purple-500",
    },
    {
      icon: <Check size={28} className="text-green-400" />,
      title: "Succeed",
      description:
        "Enjoy the results as your business grows and thrives with our continued support.",
      color: "bg-green-500",
    },
  ];

  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-3">How It Works</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A simple, proven process that delivers exceptional results every
            time.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main vertical line */}
          <div className="absolute left-24 top-0 bottom-0 w-1 bg-gray-700 z-0"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="flex">
                {/* Timeline node with number */}
                <div className="w-48 flex justify-center relative">
                  <div
                    className={`${step.color} rounded-full w-12 h-12 flex items-center justify-center z-10 absolute left-24 transform -translate-x-1/2`}
                  >
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="flex-1 pl-6">
                  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors shadow-lg">
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        {step.icon}
                      </div>
                      <h3 className="text-white text-xl font-semibold">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
