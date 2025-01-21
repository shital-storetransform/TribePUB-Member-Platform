import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MemberiumCertification() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null); // Store the dynamic image URL
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const postId = 79; // Post ID for the Memberium Certification section
    const apiUrl = `https://tribepub.storeredesign.com/wp-json/wp/v2/posts/${postId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setContent(response.data.content.rendered); // Set the content for the Memberium Certification section
        
        const imageId = response.data.featured_media; // Get the featured media ID

        if (imageId) {
          // Fetch the featured image based on the ID
          axios
            .get(`https://tribepub.storeredesign.com/wp-json/wp/v2/media/${imageId}`)
            .then((imageResponse) => {
              setImage(imageResponse.data.source_url); // Set the image URL
            })
            .catch(() => {
              setError("Error fetching the featured image.");
            });
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching content for Memberium Certification.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-red-800">One Of Only Four Certified</span>
              <br />Agency Partners In The World
            </h2>
            {/* Dynamically injecting content into paragraphs */}
            <div className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: content }} />
            <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-full">
              View Our Memberium Interview
            </button>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full h-[400px]">
              <img
                src={image || "../placeholder.png"} // Fallback to placeholder if the image isn't loaded
                alt="Memberium Certification Badge"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
