import Placeholder from "../placeholder.png"
import { Link } from 'react-router-dom';
import Tribepub from "../Assets/image 1.png"
import { Facebook, Youtube, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1170px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-800 pb-12">
          {/* Logo and Description Section */}
          <div className="space-y-6">
            <img
              src={Tribepub}
              alt="TribePUB"
              width={200}
              height={50}
              className="mb-6"
            />
            <p className="text-gray-400">
              We architect and build a Platform Unified Business ("PUB") for you the Tribe Leader and your Tribe.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-amber-500 hover:text-amber-400">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-amber-500 hover:text-amber-400">
                <Youtube className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-amber-500 hover:text-amber-400">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link to="#" className="text-amber-500 hover:text-amber-400">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-amber-500 font-semibold text-lg mb-4">Community</h3>
            <p className="text-gray-400 mb-4">
              Visit our My TribePUB Membership Platform to learn more about TribePUB and to engage with our community and learning resources.
            </p>
            <Link to="#" className="text-amber-500 hover:text-amber-400 inline-flex items-center">
              Our Community
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-amber-500 font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">About</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Team</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Upwork</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">LinkedIn</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Kyle Newton</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-amber-500 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Tech Stack</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Client & Studies</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Results</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">Packages</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 space-y-4 text-sm text-gray-400">
          <p className="text-center">©2024- TribePub All Rights Reserved.</p>
          <p className="text-center">
            TribePUB, Platform Unified Business (PUB), Platform Operations Dashboard (POD), Gamplify, GappBooks and Engagement Matrix are all Trademarks and the property of TribePUB.
          </p>
          <p className="text-center text-xs">
            WordPress, BuddyBoss, LearnDash, WooCommerce, GamiPress, AffiliateWP, Gravity Forms, GroundHogg, Uncanny Automator, Infusionsoft / Keap, Memberium, UpWork and any other product or service names, logos, brands, and other trademarks or images featured or referred to within TribePUB's websites and/or on any social media sites are the property of their respective trademark holders. These trademark holders are not affiliated with TribePUB or it's websites. With the exception of Memberium, these trademark holders do not sponsor or endorse TribePUB or any of it's products or comments.
          </p>
        </div>
      </div>
    </footer>
  );
}
