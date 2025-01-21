import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Star } from 'lucide-react';

// Post IDs for the services
const servicePostIds = [99, 101, 102, 103, 104, 105, 106];

export default function ServicesSection() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API URL to fetch custom post type "services" posts
    const apiUrl = 'https://tribepub.storeredesign.com/wp-json/wp/v2/services';

    // Function to fetch a service by its ID
    const fetchService = async (id) => {
      try {
        const serviceResponse = await axios.get(`${apiUrl}/${id}`);
        const service = serviceResponse.data;

        // Return formatted service data
        return {
          title: service.title.rendered,
          description: service.content.rendered, // Fetch full content
        };
      } catch (err) {
        console.error('Error fetching service:', err);
        return null;
      }
    };

    // Fetch all the services based on their IDs
    const fetchServices = async () => {
      try {
        const fetchedServices = await Promise.all(servicePostIds.map(fetchService));
        setServices(fetchedServices.filter(Boolean)); // Filter out any null responses
        setLoading(false);
      } catch (err) {
        setError('Error fetching services.');
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="py-16 bg-gradient-to-br from-red-900 to-red-950 text-white custom-gradient">
      <div className="max-w-[1170px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-200">
          A Platform Unified Business ("PUB") is an online business that has its core business systems and tech stack unified for maximum efficiency and results.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-gray-900">
              <Star className="w-6 h-6 text-amber-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <div
                className="text-gray-600 mb-4"
                dangerouslySetInnerHTML={{ __html: service.description }} // Render HTML safely from WordPress
              />
              <button className="text-red-800 font-medium hover:underline">
                READ MORE
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
