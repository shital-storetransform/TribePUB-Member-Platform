import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tribepub from "../Assets/image 1.png";

export default function Navbar() {
  const [wordpressUrl, setWordPressUrl] = useState(null);

  useEffect(() => {
    // Fetch the WordPress site information
    fetch("https://tribepub.storeredesign.com/wp-json")
      .then(response => response.json())
      .then(data => {
        setWordPressUrl(data?.url); // Set the WordPress URL from the API response
      })
      .catch(error => console.error('Error fetching WordPress URL:', error));
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm custom-bg">
      <div className="max-w-[1170px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to={wordpressUrl || "/"} className="flex items-center space-x-2">
            <img
              src={Tribepub}
              alt="TribePUB Logo"
              className="h-10 w-auto"
              style={{ width: 198, height: 56 }}
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
          <Link to={wordpressUrl || "/"} className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/tech-stack" className="text-gray-700 hover:text-gray-900">Tech Stack</Link>
            <Link to="/clients" className="text-gray-700 hover:text-gray-900">Client & Results</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
            <button variant="outline" className="border border-red-800 text-red-800 hover:bg-red-800 hover:text-white p-3 rounded-full">
              Discover a Free Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
