import React from 'react';
import { Facebook, Instagram, Share2 } from 'lucide-react';

const SocialMedia = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Share2 className="h-16 w-16 mx-auto mb-4 text-kwaderno-brown" />
          <h1 className="text-5xl font-bold text-kwaderno-brown mb-4 font-serif">Connect With Us</h1>
          <p className="text-xl text-gray-600">Follow our journey and stay updated with the latest news</p>
        </div>

        {/* Social Media Links */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <a
            href="https://facebook.com/KwadernoBySartinCafe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all transform hover:scale-105"
          >
            <Facebook className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold text-kwaderno-brown mb-2">Facebook</h3>
            <p className="text-gray-600">Like our page for updates and promotions</p>
          </a>

          <a
            href="https://instagram.com/kwadernobysartincafe"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all transform hover:scale-105"
          >
            <Instagram className="h-16 w-16 mx-auto mb-4 text-pink-600" />
            <h3 className="text-xl font-bold text-kwaderno-brown mb-2">Instagram</h3>
            <p className="text-gray-600">Follow us for daily coffee inspiration</p>
          </a>
        </div>

        {/* Hashtags */}
        <div className="bg-kwaderno-brown text-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center font-serif">Use Our Hashtags</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-kwaderno-light text-kwaderno-dark px-4 py-2 rounded-full font-semibold">#Kwaderno</span>
            <span className="bg-kwaderno-light text-kwaderno-dark px-4 py-2 rounded-full font-semibold">#KwadernoBySartinCafe</span>
            <span className="bg-kwaderno-light text-kwaderno-dark px-4 py-2 rounded-full font-semibold">#BambangCoffee</span>
            <span className="bg-kwaderno-light text-kwaderno-dark px-4 py-2 rounded-full font-semibold">#NuevaVizcaya</span>
            <span className="bg-kwaderno-light text-kwaderno-dark px-4 py-2 rounded-full font-semibold">#CoffeePH</span>
            <span className="bg-kwaderno-light text-kwaderno-dark px-4 py-2 rounded-full font-semibold">#BrewingStories</span>
          </div>
        </div>

        {/* Share Your Experience */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-kwaderno-brown mb-6 text-center font-serif">Share Your Experience</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              We'd love to see your Kwaderno moments! Tag us in your photos and use our hashtags 
              to be featured on our page. Whether it's your favorite drink, a cozy corner you found, 
              or a memory you made at Kwaderno - share it with our community!
            </p>
            <div className="bg-kwaderno-cream p-6 rounded-lg">
              <p className="text-kwaderno-brown font-semibold mb-2">Photo Tips:</p>
              <ul className="text-gray-600 text-left space-y-2">
                <li>• Capture your drink in good lighting</li>
                <li>• Show the cozy atmosphere of the café</li>
                <li>• Include friends or family enjoying their time</li>
                <li>• Highlight the unique Kwaderno branding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
