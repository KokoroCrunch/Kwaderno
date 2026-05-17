import React from 'react';
import { Coffee, Heart, Users, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-kwaderno-brown mb-4 font-serif">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a humble garage dream to a beloved community hub
          </p>
        </div>

        {/* Origin Story */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-kwaderno-brown mb-4 font-serif">Our Origins</h2>
                <p className="text-gray-700 mb-4">
                  Kwaderno by Sartin Cafe began as a humble garage-based dream with a mission to support local farmers 
                  and promote the rich culture of Nueva Vizcaya. The name "Kwaderno" (notebook) reflects our theme 
                  of writing, recording memories, and sharing moments over coffee.
                </p>
                <p className="text-gray-700">
                  Established in early 2023, we celebrated our 3rd anniversary on February 28, 2026, marking three 
                  years of serving our community with love and dedication.
                </p>
              </div>
              <Coffee className="h-32 w-32 text-kwaderno-brown flex-shrink-0" />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-kwaderno-brown text-white rounded-lg shadow-lg p-8">
              <Heart className="h-12 w-12 mb-4 text-kwaderno-light" />
              <h3 className="text-2xl font-bold mb-4 font-serif">Our Mission</h3>
              <p className="text-kwaderno-light">
                To provide a cozy space where stories are brewed and memories are made, while supporting local 
                farmers and celebrating Novo Vizcayano culture through every cup we serve.
              </p>
            </div>
            <div className="bg-kwaderno-dark text-white rounded-lg shadow-lg p-8">
              <Users className="h-12 w-12 mb-4 text-kwaderno-light" />
              <h3 className="text-2xl font-bold mb-4 font-serif">Our Vision</h3>
              <p className="text-kwaderno-light">
                To be the heart of Bambang's community - a place where creativity flows, connections are made, 
                and the love for quality coffee brings people together.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-kwaderno-brown mb-8 text-center font-serif">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Leaf className="h-16 w-16 mx-auto mb-4 text-kwaderno-brown" />
              <h3 className="text-xl font-bold text-kwaderno-brown mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize sustainable practices, using heritage salt from Cagayan and locally sourced ingredients.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Heart className="h-16 w-16 mx-auto mb-4 text-kwaderno-brown" />
              <h3 className="text-xl font-bold text-kwaderno-brown mb-2">Community</h3>
              <p className="text-gray-600">
                We act as a hub for community engagement, supporting local initiatives and fostering connections.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Coffee className="h-16 w-16 mx-auto mb-4 text-kwaderno-brown" />
              <h3 className="text-xl font-bold text-kwaderno-brown mb-2">Quality</h3>
              <p className="text-gray-600">
                Every cup is crafted with care using premium beans and traditional Filipino brewing methods.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-kwaderno-brown mb-8 text-center font-serif">Our Journey</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-kwaderno-brown text-white rounded-full w-16 h-16 flex items-center justify-center font-bold flex-shrink-0">
                  2023
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kwaderno-brown">Establishment</h3>
                  <p className="text-gray-600">Kwaderno by Sartin Cafe opened its doors in Bambang, Nueva Vizcaya</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-kwaderno-brown text-white rounded-full w-16 h-16 flex items-center justify-center font-bold flex-shrink-0">
                  2025
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kwaderno-brown">2nd Anniversary</h3>
                  <p className="text-gray-600">Celebrated our 2nd anniversary with special promotions and community events</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-kwaderno-brown text-white rounded-full w-16 h-16 flex items-center justify-center font-bold flex-shrink-0">
                  2026
                </div>
                <div>
                  <h3 className="text-xl font-bold text-kwaderno-brown">3rd Anniversary</h3>
                  <p className="text-gray-600">Celebrated our 3rd anniversary on February 28, 2026, with enhanced sustainability initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
