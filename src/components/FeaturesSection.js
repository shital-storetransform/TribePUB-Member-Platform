import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FeaturesSection() {
  const [content, setContent] = useState('');
  const [dashboardContent, setDashboardContent] = useState('');
  const [platformImage, setPlatformImage] = useState('');
  const [dashboardImage, setDashboardImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const postId = 70; // Post ID for the first section
    const dashboardPostId = 73; // Post ID for the second section

    // Fetch content for the first section
    const apiUrl1 = `https://tribepub.storeredesign.com/wp-json/wp/v2/posts/${postId}`;
    // Fetch content for the second section
    const apiUrl2 = `https://tribepub.storeredesign.com/wp-json/wp/v2/posts/${dashboardPostId}`;

    axios
      .get(apiUrl1)
      .then((response) => {
        setContent(response.data.content.rendered); // Set content for the first section
        // Fetch the featured image for the first post
        const imageId = response.data.featured_media;
        if (imageId) {
          axios
            .get(`https://tribepub.storeredesign.com/wp-json/wp/v2/media/${imageId}`)
            .then((imageResponse) => {
              setPlatformImage(imageResponse.data.source_url); // Set the platform image
            })
            .catch(() => {
              setError('Error fetching the featured image for the first section');
            });
        }
      })
      .catch(() => {
        setError('Error fetching blog content for the first section');
      });

    axios
      .get(apiUrl2)
      .then((response) => {
        setDashboardContent(response.data.content.rendered); // Set content for the second section
        // Fetch the featured image for the second post
        const imageId = response.data.featured_media;
        if (imageId) {
          axios
            .get(`https://tribepub.storeredesign.com/wp-json/wp/v2/media/${imageId}`)
            .then((imageResponse) => {
              setDashboardImage(imageResponse.data.source_url); // Set the dashboard image
            })
            .catch(() => {
              setError('Error fetching the featured image for the second section');
            });
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching blog content for the second section');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="py-16">
      <div className="max-w-[1170px] mx-auto px-4 space-y-32">
        {/* First Feature */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={platformImage || 'default-image.png'} // Fallback if no image is loaded
            alt="Platform Unified Business"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A <span className="text-red-800">Platform Unified Business</span> Empowers You To Monetize & Grow
            </h2>
            {/* Dynamic Content Injection for First Section */}
            <div className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: content }} />
            <button className="bg-amber-500 hover:bg-amber-600 px-8 py-4 text-white text-lg button-bg rounded-full">
              Why You Need a PUB?
            </button>
          </div>
        </div>

        {/* Second Feature with Dynamic Content for Dashboard */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-800">
              Platform Operations <br />
              Dashboard
            </h2>
            {/* Dynamic Content Injection for Dashboard Section */}
            <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={{ __html: dashboardContent }} />
            <button className="bg-amber-500 hover:bg-amber-600 px-8 py-4 text-white text-lg rounded-full">
              Why You Need a POD?
            </button>
          </div>
          <img
            src={dashboardImage || 'default-image.png'} // Fallback if no image is loaded
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
