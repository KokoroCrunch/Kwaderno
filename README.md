# Kwaderno by Sartin Cafe - Restaurant Website

A full-stack MERN application for Kwaderno by Sartin Cafe, a cozy coffee shop located in Bambang, Nueva Vizcaya, Philippines.

## Features

### Public Website
- **Home**: Hero section with branding, features showcase, and call-to-action
- **About**: Company history, mission, vision, values, and timeline
- **Location**: Address, operating hours, map integration, and directions
- **Menu**: Browse all menu items with category filtering and photos
- **Social Media**: Social media links, hashtags, and community engagement

### Admin Panel
- **Authentication**: Secure admin login system
- **Dashboard**: Overview of menu items, users, and statistics
- **Menu Management**: Create, read, update, and delete menu items with photo upload
- **User Management**: View and manage user accounts

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Multer** - File upload handling
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Frontend
- **React** - UI library
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Lucide React** - Icons

## Project Structure

```
Kwaderno by Sartin Cafe/
├── Backend/
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware (auth, upload)
│   ├── models/             # Database models (User, MenuItem)
│   ├── routes/             # API routes
│   ├── uploads/            # Uploaded images directory
│   ├── .env                # Environment variables
│   ├── package.json        # Backend dependencies
│   └── server.js          # Entry point
├── Frontend/
│   ├── public/             # Static assets (logo, banner)
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── utils/          # Utility functions (API)
│   │   ├── App.js          # Main app component
│   │   └── index.js        # Entry point
│   ├── package.json        # Frontend dependencies
│   ├── tailwind.config.js  # Tailwind configuration
│   └── postcss.config.js   # PostCSS configuration
├── Resources/              # Brand assets and menu images
├── STYLE_GUIDE.md          # Design system documentation
└── README.md              # This file
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (installed and running)
- npm or yarn

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables in `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/kwaderno
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Default Admin Account

To access the admin panel, you need to create an admin account. You can do this via the registration endpoint or directly in MongoDB.

### Creating Admin via API

Send a POST request to `http://localhost:5000/api/auth/register` with:
```json
{
  "name": "Admin",
  "email": "admin@kwaderno.com",
  "password": "admin123",
  "role": "admin"
}
```

Then login at `http://localhost:3000/admin/login` with these credentials.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Menu Items
- `GET /api/menu` - Get all menu items
- `GET /api/menu/:id` - Get single menu item
- `POST /api/menu` - Create menu item (admin only)
- `PUT /api/menu/:id` - Update menu item (admin only)
- `DELETE /api/menu/:id` - Delete menu item (admin only)

### Users
- `GET /api/users` - Get all users (admin only)
- `GET /api/users/:id` - Get single user (admin only)
- `PUT /api/users/:id` - Update user (admin only)
- `DELETE /api/users/:id` - Delete user (admin only)

## Menu Schema

Each menu item contains:
- **name**: String (required)
- **description**: String (required)
- **price**: Number (required)
- **category**: String (required) - Options: Batirol, Flavored Coffee, Frappe, Matcha, Milk Concoction, Specials, The Classics, Waffle
- **photo**: String (optional) - Image URL
- **available**: Boolean (default: true)

## Branding

The website uses the Kwaderno brand identity:

### Colors
- **Primary Brown**: #8B4513
- **Dark Brown**: #3D2314
- **Light Brown**: #D4A574
- **Accent**: #C19A6B
- **Cream Background**: #F5F0E6

### Typography
- **Headings**: Georgia (serif)
- **Body**: Arial (sans-serif)

### Logo & Images
- Logo and banner images are located in `Resources/KwadernoLogo/`
- Menu item images are organized by category in `Resources/Coffee Menu/`

For detailed design specifications, refer to `STYLE_GUIDE.md`.

## Usage

### For Visitors
1. Browse the website to learn about Kwaderno
2. View the menu with prices and descriptions
3. Check location and operating hours
4. Connect via social media

### For Admins
1. Login at `/admin/login`
2. Access the dashboard for overview
3. Manage menu items (add, edit, delete)
4. Manage user accounts
5. Upload photos for menu items

## Development

### Adding New Features

1. **Backend**: Add routes in `Backend/routes/`, controllers in `Backend/controllers/`, and models in `Backend/models/`
2. **Frontend**: Add components in `Frontend/src/components/`, pages in `Frontend/src/pages/`
3. **Styling**: Follow the style guide in `STYLE_GUIDE.md` and use Tailwind CSS classes

### Testing

Test the application by:
1. Starting both backend and frontend servers
2. Navigating to `http://localhost:3000`
3. Testing public pages
4. Logging in as admin
5. Testing CRUD operations on menu items

## Deployment

### Backend Deployment
1. Deploy to a hosting service (e.g., Heroku, Railway, Vercel)
2. Set environment variables in the hosting platform
3. Ensure MongoDB is accessible (use MongoDB Atlas for cloud database)

### Frontend Deployment
1. Build the frontend: `npm run build`
2. Deploy the build folder to a hosting service (e.g., Vercel, Netlify)
3. Update API URL in production environment

## Troubleshooting

### Common Issues

**MongoDB Connection Error**
- Ensure MongoDB is running locally
- Check the MONGODB_URI in `.env`

**CORS Errors**
- Ensure backend CORS is configured correctly
- Check that frontend and backend are on allowed origins

**Image Upload Issues**
- Ensure `uploads` directory exists in Backend
- Check file size limits in multer configuration

**Authentication Issues**
- Verify JWT_SECRET is set correctly
- Check token expiration time

## License

This project is for Kwaderno by Sartin Cafe.

## Contact

For questions or support, please contact the development team.

---

**Kwaderno by Sartin Cafe** - Brewing Stories in Bambang, Nueva Vizcaya
