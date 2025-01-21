import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UpworkProfile() {
  const [content, setContent] = useState('');
  const [upworkImage, setUpworkImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const postId = 76; // Post ID for the Upwork Profile section
    const apiUrl = `https://tribepub.storeredesign.com/wp-json/wp/v2/posts/${postId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setContent(response.data.content.rendered); // Set the content for the Upwork Profile section

        const imageId = response.data.featured_media; // Get the featured image ID

        if (imageId) {
          // Fetch the featured image using the ID
          axios
            .get(`https://tribepub.storeredesign.com/wp-json/wp/v2/media/${imageId}`)
            .then((imageResponse) => {
              setUpworkImage(imageResponse.data.source_url); // Set the featured image URL
            })
            .catch(() => {
              setError("Error fetching the featured image for Upwork Profile.");
            });
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching content for Upwork Profile.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[400px]">
            <img
              src={upworkImage || "../Assets/image 10.png"} // Fallback image if featured image is not available
              alt="Upwork Profile"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              #1 Ranked On <span className="text-red-800">UpWork</span>
            </h2>
            {/* Dynamically injecting content into paragraphs */}
            <div className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: content }} />
            <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-full">
              Visit Our Work Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
