import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, MapPin, Facebook, Instagram, Clock, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="/banner.jpg" alt="Kwaderno Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-kwaderno-brown/90 to-kwaderno-dark/90"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <Coffee className="h-20 w-20 mx-auto mb-6 text-kwaderno-light" />
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4">Kwaderno</h1>
          <p className="text-2xl md:text-3xl mb-2 font-light">by Sartin Cafe</p>
          <p className="text-lg md:text-xl mb-8 text-kwaderno-light">Brewing Stories in Bambang, Nueva Vizcaya</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-kwaderno-light hover:bg-kwaderno-accent text-kwaderno-dark font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-kwaderno-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Link
              to="/about"
              className="inline-block border-2 border-kwaderno-brown text-kwaderno-brown hover:bg-kwaderno-brown hover:text-white font-bold py-3 px-8 rounded-full transition-all"
            >
              Our Story
            </Link>
          </div>
          <h2 className="text-4xl font-bold text-center text-kwaderno-brown mb-12 font-serif">
            Why Choose Kwaderno?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Coffee className="h-16 w-16 mx-auto mb-4 text-kwaderno-brown" />
              <h3 className="text-xl font-bold text-kwaderno-brown mb-2">Locally Sourced Coffee</h3>
              <p className="text-gray-600">Premium coffee beans from local farmers, supporting our community</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <Star className="h-16 w-16 mx-auto mb-4 text-kwaderno-brown" />
              <h3 className="text-xl font-bold text-kwaderno-brown mb-2">Traditional Filipino Beverages</h3>
              <p className="text-gray-600">Experience tsokolate de batirol and our signature Kwaderno blends</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-kwaderno-brown" />
              <h3 className="text-xl font-bold text-kwaderno-brown mb-2">Cozy Atmosphere</h3>
              <p className="text-gray-600">A perfect space to write, work, or share moments over coffee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-kwaderno-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Clock className="h-8 w-8 text-kwaderno-light flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Operating Hours</h3>
                <p className="text-kwaderno-light">Monday - Sunday: 8:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-8 w-8 text-kwaderno-light flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-kwaderno-light">Bambang, Nueva Vizcaya, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kwaderno-cream text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-kwaderno-brown mb-6 font-serif">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Experience the warmth of Filipino hospitality and the rich flavors of our carefully crafted beverages
          </p>
          <Link
            to="/location"
            className="inline-block bg-kwaderno-brown hover:bg-kwaderno-dark text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105"
          >
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
