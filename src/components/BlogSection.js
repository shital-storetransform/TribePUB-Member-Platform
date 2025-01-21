import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define post IDs for each section
    const postIds = [93, 91, 89];
    const apiUrl = `https://tribepub.storeredesign.com/wp-json/wp/v2/posts`;

    // Function to fetch post by ID
    const fetchPost = async (id) => {
      try {
        const postResponse = await axios.get(`${apiUrl}/${id}`);
        const post = postResponse.data;

        // Fetch the featured image ID from the post
        const featuredImageId = post.featured_media;

        let featuredImageUrl = ""; // Default empty

        // Fetch the featured image URL using the media endpoint
        if (featuredImageId) {
          const mediaResponse = await axios.get(
            `https://tribepub.storeredesign.com/wp-json/wp/v2/media/${featuredImageId}`
          );
          featuredImageUrl = mediaResponse.data.source_url; // Use the source URL of the featured image
        }

        // Format the date as "October 13, 2024"
        const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        return {
          title: post.title.rendered,
          date: formattedDate,  // Use the formatted date
          description: post.excerpt.rendered,
          image: featuredImageUrl || "default-image-path", // Use the fetched image URL or a placeholder
        };
      } catch (err) {
        console.error("Error fetching post:", err);
        return null;
      }
    };

    // Fetch all posts
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await Promise.all(postIds.map(fetchPost));
        setPosts(fetchedPosts.filter(Boolean)); // Filter out any null responses
        setLoading(false);
      } catch (err) {
        setError("Error fetching blog posts.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1170px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Blogs
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Everything you need to know about membership sites
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="overflow-hidden shadow-lg rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full object-cover h-48"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>  {/* Display the formatted date */}
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <div
                  className="text-gray-600 mb-4"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />
                <button className="text-red-800 hover:underline font-medium">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center rounded-full border border-red-800 px-6 py-2 text-red-800 hover:bg-red-800 hover:text-white transition-colors">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
}
