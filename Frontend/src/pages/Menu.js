import React, { useState, useEffect } from 'react';
import { menuAPI } from '../utils/api';
import { Coffee, Loader } from 'lucide-react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Batirol', 'Flavored Coffee', 'Frappe', 'Matcha', 'Milk Concoction', 'Specials', 'The Classics', 'Waffle'];

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await menuAPI.getAll();
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="h-12 w-12 animate-spin text-kwaderno-brown" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Coffee className="h-16 w-16 mx-auto mb-4 text-kwaderno-brown" />
          <h1 className="text-5xl font-bold text-kwaderno-brown mb-4 font-serif">Our Menu</h1>
          <p className="text-xl text-gray-600">Discover our carefully crafted beverages and treats</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-kwaderno-brown text-white'
                  : 'bg-white text-kwaderno-brown hover:bg-kwaderno-light'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No items available in this category</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {item.photo && (
                  <div className="h-96 bg-gray-200 overflow-hidden flex items-center justify-center">
                    <img
                      src={`http://localhost:5000${item.photo}`}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-kwaderno-brown">{item.name}</h3>
                    <span className="text-lg font-bold text-kwaderno-accent">
                      ₱{item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-sm text-kwaderno-brown mb-3">{item.category}</p>
                  <p className="text-gray-600">{item.description}</p>
                  {!item.available && (
                    <p className="mt-3 text-red-500 font-semibold">Currently Unavailable</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
