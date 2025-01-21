import React from 'react';
import Image2 from '../Assets/image 2.png'
import Image3 from '../Assets/image 3.png'
import Image4 from '../Assets/image 4.png'
import Image5 from '../Assets/image 5.png'
import Image6 from '../Assets/image 6.png'
import Image7 from '../Assets/image 7.png'
import Image8 from '../Assets/image 8.png'

export default function PartnersSection() {
  const partners = [
    { name: "BuddyBoss", image: Image2 },
    { name: "Tutor LMS", image: Image3 },
    { name: "Elementor", image: Image4 },
    { name: "LearnDash", image: Image5 },
    { name: "WooCommerce",image: Image6 },
    { name: "Divi", image: Image7 },
    { name: "Spectra", image: Image8 },
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
