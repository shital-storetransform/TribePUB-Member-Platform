import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tribepub from "../Assets/image 1.png";
import he from 'he'; // Import the 'he' library

export default function Navbar() {
  const [menuItems, setMenuItems] = useState([]); // Initialize as empty array
  const [wordpressUrl, setWordPressUrl] = useState(null);
  const [loadingMenu, setLoadingMenu] = useState(true); // Track menu loading state

  useEffect(() => {
    // Fetch the WordPress site information
    fetch("https://tribepub.storeredesign.com/wp-json")
      .then(response => response.json())
      .then(data => {
        setWordPressUrl(data?.url); // Set the WordPress URL from the API response
      })
      .catch(error => console.error('Error fetching WordPress URL:', error));

    // Fetch the "Main Menu" from WordPress via REST API
    fetch("https://tribepub.storeredesign.com/wp-json/wp-api-menus/v2/menus/main-menu")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data for debugging
        // Assuming the response is an array of menu items
        if (data && Array.isArray(data)) {
          setMenuItems(data); // Set the menu items
        } else {
          console.error('Unexpected menu data structure:', data);
          setMenuItems([]); // Fallback in case of unexpected data structure
        }
      })
      .catch(error => {
        console.error('Error fetching menu data:', error);
        setMenuItems([]); // Fallback to empty menu on error
      })
      .finally(() => {
        setLoadingMenu(false); // Set loading state to false when API call finishes
      });
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
            {loadingMenu ? (
              <span>Loading menu...</span> // Show loading message while fetching menu
            ) : menuItems.length > 0 ? (
              menuItems.map(item => (
                <Link
                  key={item.ID}
                  to={item.url}
                  className="text-gray-700 hover:text-gray-900"
                >
                  {he.decode(item.title)} {/* Decode HTML entities */}
                </Link>
              ))
            ) : (
              <span>No menu items found</span> // Display if menu is empty
            )}
            <button variant="outline" className="border border-red-800 text-red-800 hover:bg-red-800 hover:text-white p-3 rounded-full">
              Discover a Free Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
