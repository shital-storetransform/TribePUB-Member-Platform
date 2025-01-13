import { UserPlus, Award } from 'lucide-react';

export default function DevelopmentFeatures() {
  const features = [
    {
      title: "Subscription & Membership",
      icon: <UserPlus className="w-8 h-8 text-red-800" />
    },
    {
      title: "Subscription & Membership",
      icon: <Award className="w-8 h-8 text-red-800" />
    },
    {
      title: "Subscription & Membership",
      icon: <UserPlus className="w-8 h-8 text-red-800" />
    },
    {
      title: "Subscription & Membership",
      icon: <Award className="w-8 h-8 text-red-800" />
    },
    {
      title: "Subscription & Membership",
      icon: <UserPlus className="w-8 h-8 text-red-800" />
    },
    {
      title: "Subscription & Membership",
      icon: <Award className="w-8 h-8 text-red-800" />
    },
    {
      title: "Subscription & Membership",
      icon: <UserPlus className="w-8 h-8 text-red-800" />
    },
    {
      title: "Subscription & Membership",
      icon: <Award className="w-8 h-8 text-red-800" />
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1170px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-red-800">Membership Website</span> Development Features
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          A Platform Unified Business ("PUB") is an online business that has its core business systems and tech stack unified for maximum efficiency and results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border-2 hover:border-red-800 transition-colors p-6 rounded-lg shadow-md"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-center">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
