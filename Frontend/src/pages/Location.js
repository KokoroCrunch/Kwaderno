import React from 'react';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-kwaderno-brown mb-4 font-serif">Visit Us</h1>
          <p className="text-xl text-gray-600">Find us in the heart of Bambang, Nueva Vizcaya</p>
        </div>

        {/* Location Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-kwaderno-brown mb-6 font-serif">Location Details</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-kwaderno-brown flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-kwaderno-brown mb-1">Address</h3>
                  <p className="text-gray-600">
                    Bambang, Nueva Vizcaya<br />
                    Philippines
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-kwaderno-brown flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-kwaderno-brown mb-1">Operating Hours</h3>
                  <p className="text-gray-600">
                    Monday - Sunday<br />
                    8:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-kwaderno-brown flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-kwaderno-brown mb-1">Contact</h3>
                  <p className="text-gray-600">
                    Phone: (09213037782)<br />
                    Email: hed-scmanliclic@smu.edu.ph
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-kwaderno-brown flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-kwaderno-brown mb-1">For Inquiries</h3>
                  <p className="text-gray-600">
                    Reach out to us for reservations, events, or general questions
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bambang+Nueva+Vizcaya+Philippines"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-kwaderno-brown hover:bg-kwaderno-dark text-white font-bold py-3 px-6 rounded-full transition-all"
              >
                <Navigation className="h-5 w-5" />
                Get Directions
              </a>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden h-96 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.123456789!2d121.1!3d16.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI0JzAwLjAiTiAxMjHCsDA2JzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kwaderno Location"
            ></iframe>
          </div>
        </div>

        {/* Getting Here */}
        <div className="bg-kwaderno-brown text-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 font-serif">Getting Here</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3 text-kwaderno-light">By Private Vehicle</h3>
              <p className="text-kwaderno-light">
                Accessible via major highways from Manila and surrounding provinces. 
                Parking is available nearby.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-kwaderno-light">By Public Transport</h3>
              <p className="text-kwaderno-light">
                Regular bus services from Manila to Nueva Vizcaya. 
                Ask to be dropped off at Bambang town proper.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 text-kwaderno-light">Landmarks</h3>
              <p className="text-kwaderno-light">
                Located near the town center of Bambang. 
                Look for our signage along the main road.
              </p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-kwaderno-brown mb-6 font-serif">Visit Tips</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-kwaderno-brown font-bold">•</span>
              <span>Best time to visit: Early morning for a quiet atmosphere or late afternoon for the golden hour</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-kwaderno-brown font-bold">•</span>
              <span>Try our signature Kwaderno Latte and Kwaderno Mocha</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-kwaderno-brown font-bold">•</span>
              <span>Don't miss the traditional tsokolate de batirol for a authentic Filipino experience</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-kwaderno-brown font-bold">•</span>
              <span>Bring your notebook or laptop - Kwaderno is the perfect place to write or work</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-kwaderno-brown font-bold">•</span>
              <span>Follow our social media for special promotions and events</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;
