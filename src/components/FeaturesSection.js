import React from 'react';
import Placeholder from '../placeholder.png';
import Platform from '../Assets/A-Platform-Unified-Business 2.png';
import Dashboard from '../Assets/img-2 1.png';

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="max-w-[1170px] mx-auto px-4 space-y-32">
        {/* First Feature */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={Platform}
            alt="Platform Unified Business"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A <span className="text-red-800">Platform Unified Business</span> Empowers You To Monetize & Grow
            </h2>
            <p className="text-gray-600 mb-6">
              A Platform Unified Business ("PUB") is an online business that has its core business systems and tech stack unified for maximum efficiency and results.
            </p>
            <p className="text-gray-600 mb-6">
              If you have ever built and operated a WordPress Powered online business to scale then you already feel the pain and know why you need a Platform Unified Business.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 px-8 py-4 text-white text-lg button-bg rounded-full">
              Why You Need a PUB?
            </button>
          </div>
        </div>

        {/* Second Feature */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-800">
              Platform Operations <br/>
               Dashboard
            </h2>
            <p className="text-gray-600 mb-4">
              When you are running an Enterprise Level Membership Site, reporting is critical And the WordPress Ecosystem does not provide a centralized dashboard for tracking core metrics, onboarding, user engagement and progress.
            </p>
            <p className="text-gray-600 mb-4">
              Tracks user engagement across all core aspects of your platform. Learning, Social Interaction, Purchases / Subscription, Gamification, and much more.
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 px-8 py-4 text-white text-lg rounded-full">
              Why You Need a POD?
            </button>
          </div>
          <img
            src={Dashboard}
            alt="Platform Operations Dashboard"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
