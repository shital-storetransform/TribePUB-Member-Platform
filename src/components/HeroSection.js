import React from 'react';
import { Check } from 'lucide-react'; // Using lucide-react for the check icon

export default function HeroSection() {
  const features = [
    "Easy Content Paywalls",
    "Drip Feed Content",
    "Custom Access Rules",
    "Easy Content Paywalls",
    "Easy Content Paywalls",
    "Easy Content Paywalls"
  ];

  return (
    <section className="pt-32 pb-16 px-4 custom-bg">
      <div className="max-w-[1170px] mx-auto text-center">
        <span className="inline-block text-lg font-medium mb-4">
          #1 Wordpress Membership Plugin
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-red-800">Membership Platform</span>
          <br />
          Development & Growth
        </h1>
        
        <p className="max-w-3xl mx-auto text-gray-600 mb-8 text-lg">
          For 20+ years we have helped architect, build, gamify, grow and monetize over 300 Membership Platforms from 
          the Startup Phase all the way to Enterprise Level Platforms with 1,000,000+ members.
        </p>

        <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 h-auto text-lg rounded-full button-bg">
          FIND OUT IF WE ARE A FIT FOR YOU
        </button>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16 ">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3 custom-bg-icon">
                <Check className="w-6 h-6 text-gray-600" />
              </div>
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
