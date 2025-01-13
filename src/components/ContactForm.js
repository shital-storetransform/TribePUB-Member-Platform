import { useState } from 'react';
// import Placeholder from "../placeholder.png"; // Import the placeholder image
// import MaskGroup4 from '/
import MaskGroup4 from "../Assets/Mask group (2).png";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send data to API)
    console.log('Form submitted:', formData);
  };

  return (
    <section
      className="py-16 bg-red-900 bg-blend-multiply"
      style={{ backgroundImage: `url(${MaskGroup4})` }} // Set background image using imported image
    >
      <div className="max-w-[1170px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
        Let's Schedule A Free Discovery Call 🤙
        </h2>
        <p className="text-center text-gray-200 mb-12 max-w-2xl mx-auto">
          We would love to connect with you and learn more about you and your vision for your membership platform.
        </p>

        <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name*"
              className="bg-white px-4 py-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
              className="bg-white px-4 py-2 rounded"
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="bg-white px-4 py-2 rounded"
            />
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website"
              className="bg-white px-4 py-2 rounded"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="bg-white px-4 py-2 rounded w-full"
            rows={6}
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-2 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
