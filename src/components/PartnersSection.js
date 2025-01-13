import React from 'react';

export default function PartnersSection() {
  const partners = [
    { name: "BuddyBoss", image: "image 2.png" },
    { name: "Tutor LMS", image: "image 3.png" },
    { name: "Elementor", image: "image 4.png" },
    { name: "LearnDash", image: "image 5.png" },
    { name: "WooCommerce", image: "image 6.png" },
    { name: "Divi", image: "image 7.png" },
    { name: "Spectra", image: "image 8.png" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1170px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-red-800">TribePUB</span> Works With Products You Love
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          In fact, inserting any fantasy text or a famous text, be it a poem, a speech, a literary passage, a song's text, etc., 
          our text generator will provide the random extraction of terms and steps to compose your own exclusive.
        </p>

        <div className="flex gap-8 items-center justify-center flex-wrap">
          {partners.map((partner, index) => (
            <div key={index} className="w-60 h-20 flex items-center justify-center">
              <img
                src={partner.image}
                alt={partner.name}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
