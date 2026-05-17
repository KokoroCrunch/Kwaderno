const mongoose = require('mongoose');
const User = require('./models/User');
const MenuItem = require('./models/MenuItem');
require('dotenv').config();

// Menu items based on actual images in Resources/Coffee Menu folder
const sampleMenuItems = [
  // Batirol
  {
    name: 'Tsokolate de Batirol',
    description: 'Traditional Filipino hot chocolate made from tablea, whisked to perfection with a wooden batidor',
    price: 120,
    category: 'Batirol',
    photo: '/uploads/Tsokolate de Batirol.jpg',
    available: true
  },
  {
    name: 'Batirol Barako',
    description: 'Rich and bold Filipino coffee made from premium barako beans',
    price: 130,
    category: 'Batirol',
    photo: '/uploads/Batirol Barako.jpg',
    available: true
  },
  {
    name: 'Batirol Sili',
    description: 'Spicy twist on traditional batirol with a hint of chili',
    price: 135,
    category: 'Batirol',
    photo: '/uploads/Batirol Sili.png',
    available: true
  },
  {
    name: 'Chococino',
    description: 'Creamy chocolate coffee blend with a smooth finish',
    price: 125,
    category: 'Batirol',
    photo: '/uploads/Chococino.jpg',
    available: true
  },
  {
    name: 'Batirol',
    description: 'Classic Filipino hot chocolate experience',
    price: 120,
    category: 'Batirol',
    photo: '/uploads/Batirol.png',
    available: true
  },
  // Flavored Coffee
  {
    name: 'Affogato',
    description: 'Espresso poured over vanilla ice cream for a perfect dessert coffee',
    price: 145,
    category: 'Flavored Coffee',
    photo: '/uploads/Affogato.jpg',
    available: true
  },
  {
    name: 'Caramel Macchiato',
    description: 'Espresso with vanilla syrup and caramel drizzle',
    price: 150,
    category: 'Flavored Coffee',
    photo: '/uploads/Caramel Macchiato.jpg',
    available: true
  },
  {
    name: 'Salted Caramel',
    description: 'Sweet and salty caramel flavored coffee',
    price: 155,
    category: 'Flavored Coffee',
    photo: '/uploads/Salted Caramel.jpg',
    available: true
  },
  {
    name: 'Spanish Latte',
    description: 'Sweet and creamy latte with condensed milk',
    price: 140,
    category: 'Flavored Coffee',
    photo: '/uploads/Spanish Latte.png',
    available: true
  },
  {
    name: 'White Mocha',
    description: 'Creamy white chocolate mocha with espresso',
    price: 145,
    category: 'Flavored Coffee',
    photo: '/uploads/White Mocha.jpg',
    available: true
  },
  // Frappe
  {
    name: 'Batirol Frappe',
    description: 'Blended iced batirol with a refreshing twist',
    price: 165,
    category: 'Frappe',
    photo: '/uploads/Batirol Frappe.JPEG',
    available: true
  },
  {
    name: 'Caramel Macchiato Frappe',
    description: 'Blended iced caramel macchiato with whipped cream',
    price: 170,
    category: 'Frappe',
    photo: '/uploads/Caramel Macchiato Frappe.png',
    available: true
  },
  {
    name: 'Matcha Frappe',
    description: 'Iced matcha blended with ice and milk',
    price: 165,
    category: 'Frappe',
    photo: '/uploads/Matcha Frappe.png',
    available: true
  },
  {
    name: 'Mochachino Frappe',
    description: 'Blended iced mocha with chocolate syrup',
    price: 165,
    category: 'Frappe',
    photo: '/uploads/Mochachino Frappe.png',
    available: true
  },
  {
    name: 'Salted Caramel Frappe',
    description: 'Blended iced salted caramel with whipped cream',
    price: 175,
    category: 'Frappe',
    photo: '/uploads/Salted Caramel Frappe.png',
    available: true
  },
  {
    name: 'White Mocha Frappe',
    description: 'Blended iced white chocolate mocha',
    price: 175,
    category: 'Frappe',
    photo: '/uploads/White Mocha Frappe.png',
    available: true
  },
  // Matcha
  {
    name: 'Batirol Matcha',
    description: 'Unique blend of traditional batirol with matcha',
    price: 150,
    category: 'Matcha',
    photo: '/uploads/Batirol Matcha.jpg',
    available: true
  },
  {
    name: 'Dirty Matcha',
    description: 'Matcha latte with a shot of espresso for an extra kick',
    price: 160,
    category: 'Matcha',
    photo: '/uploads/Dirty Matcha.png',
    available: true
  },
  {
    name: 'Matcha Latte',
    description: 'Premium Japanese matcha with steamed milk',
    price: 150,
    category: 'Matcha',
    photo: '/uploads/Matcha Latte.jpg',
    available: true
  },
  {
    name: 'Strawberry Matcha',
    description: 'Refreshing matcha with strawberry flavor',
    price: 155,
    category: 'Matcha',
    photo: '/uploads/Strawberry Matcha.jpg',
    available: true
  },
  // Milk Concoction
  {
    name: 'Blueberry Milk',
    description: 'Creamy milk with fresh blueberry flavor',
    price: 145,
    category: 'Milk Concoction',
    photo: '/uploads/Blueberry Milk.jpg',
    available: true
  },
  {
    name: 'Mango Milk',
    description: 'Sweet and creamy mango milk drink',
    price: 145,
    category: 'Milk Concoction',
    photo: '/uploads/Mango Milk.jpg',
    available: true
  },
  {
    name: 'Strawberry Milk',
    description: 'Fresh strawberry milk with a creamy finish',
    price: 145,
    category: 'Milk Concoction',
    photo: '/uploads/Strawberry Milk.jpg',
    available: true
  },
  {
    name: 'Ube Milk',
    description: 'Traditional Filipino ube flavored milk',
    price: 150,
    category: 'Milk Concoction',
    photo: '/uploads/Ube Milk.png',
    available: true
  },
  // Specials
  {
    name: 'Kwaderno Latte',
    description: 'Our signature latte with a special blend of local coffee beans',
    price: 145,
    category: 'Specials',
    photo: '/uploads/Kwaderno Latte.avif',
    available: true
  },
  {
    name: 'Kwaderno Mocha',
    description: 'Our signature mocha with rich chocolate and premium espresso',
    price: 155,
    category: 'Specials',
    photo: '/uploads/Kwaderno Mocha.jpg',
    available: true
  },
  // The Classics
  {
    name: 'Americano',
    description: 'Classic black coffee made with premium espresso',
    price: 95,
    category: 'The Classics',
    photo: '/uploads/Americano.png',
    available: true
  },
  {
    name: 'Caffe Latte',
    description: 'Smooth and creamy latte with espresso',
    price: 125,
    category: 'The Classics',
    photo: '/uploads/CaffeLatte.jpg',
    available: true
  },
  {
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam',
    price: 125,
    category: 'The Classics',
    photo: '/uploads/Cappucino.png',
    available: true
  },
  {
    name: 'Cortado',
    description: 'Espresso cut with warm milk for a balanced taste',
    price: 110,
    category: 'The Classics',
    photo: '/uploads/Cortado.png',
    available: true
  },
  {
    name: 'Flat White',
    description: 'Velvety microfoam with double ristretto',
    price: 130,
    category: 'The Classics',
    photo: '/uploads/FlatWhite.jpg',
    available: true
  },
  {
    name: 'Macchiato',
    description: 'Espresso marked with a dollop of foamed milk',
    price: 115,
    category: 'The Classics',
    photo: '/uploads/Macchiato.png',
    available: true
  },
  {
    name: 'Piccolo',
    description: 'Small latte with a strong espresso flavor',
    price: 105,
    category: 'The Classics',
    photo: '/uploads/Piccolo.png',
    available: true
  },
  // Waffle
  {
    name: 'Banana Nutella Waffle',
    description: 'Crispy waffle topped with bananas and Nutella',
    price: 180,
    category: 'Waffle',
    photo: '/uploads/Banana Nutella Waffle.jpg',
    available: true
  },
  {
    name: 'Blueberry Cream Waffle',
    description: 'Waffle with fresh blueberries and cream',
    price: 175,
    category: 'Waffle',
    photo: '/uploads/Blueberry Cream Waffle.jpg',
    available: true
  },
  {
    name: 'Peach Cream Waffle',
    description: 'Sweet peach waffle with cream topping',
    price: 175,
    category: 'Waffle',
    photo: '/uploads/Peach Cream Waffle.png',
    available: true
  },
  {
    name: 'Plain Waffle',
    description: 'Classic crispy waffle with butter and syrup',
    price: 120,
    category: 'Waffle',
    photo: '/uploads/Plain Waffle.jpg',
    available: true
  },
  {
    name: 'Waffle Platter',
    description: 'Complete waffle platter with various toppings',
    price: 220,
    category: 'Waffle',
    photo: '/uploads/Waffle Platter.jpg',
    available: true
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await MenuItem.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    const admin = await User.create({
      name: 'Admin',
      email: 'admin@kwaderno.com',
      password: 'admin123',
      role: 'admin'
    });
    console.log('Created admin user:', admin.email);

    // Create sample menu items
    const menuItems = await MenuItem.insertMany(sampleMenuItems);
    console.log(`Created ${menuItems.length} menu items`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
