# Kwaderno by Sartin Cafe - Style Guide

## Brand Identity

### Logo
- **Primary Logo**: Located in `Resources/KwadernoLogo/KwadernoLogo.jpg`
- **Banner**: Located in `Resources/KwadernoLogo/KwadernoBanner.jpg`
- **Logo Usage**: Use the primary logo on the navbar and footer. Use the banner for hero sections.

### Color Palette

#### Primary Colors
- **Kwaderno Brown**: `#8B4513` - Primary brand color for buttons, headers, and accents
- **Kwaderno Dark**: `#3D2314` - Darker shade for hover states and secondary elements
- **Kwaderno Light**: `#D4A574` - Lighter shade for highlights and secondary accents
- **Kwaderno Accent**: `#C19A6B` - Accent color for prices and highlights

#### Neutral Colors
- **Kwaderno Cream**: `#F5F0E6` - Background color for the entire website
- **White**: `#FFFFFF` - Card backgrounds and content areas
- **Gray**: Various shades for text and borders

### Typography

#### Font Families
- **Serif**: Georgia - Used for headings and brand name
- **Sans-serif**: Arial - Used for body text and UI elements

#### Font Sizes
- **H1**: 5xl (3rem / 48px) - Page titles
- **H2**: 3xl (1.875rem / 30px) - Section titles
- **H3**: 2xl (1.5rem / 24px) - Card titles
- **Body**: Base (1rem / 16px) - Regular text
- **Small**: Sm (0.875rem / 14px) - Secondary text

#### Font Weights
- **Bold**: 700 - Headings and emphasis
- **Semibold**: 600 - Subheadings
- **Regular**: 400 - Body text

### Icons

#### Icon Library
- **Lucide React** - Used throughout the application
- **Icon Size Guide**:
  - Small: h-4 w-4 (16px) - Button icons
  - Medium: h-5 w-5 (20px) - Inline icons
  - Large: h-6 w-6 (24px) - Navigation icons
  - Extra Large: h-8 w-8 (32px) - Feature icons
  - Hero: h-16 w-16 (64px) - Hero section icons

### Components

#### Buttons

##### Primary Button
```jsx
<button className="bg-kwaderno-brown hover:bg-kwaderno-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
  Button Text
</button>
```

##### Secondary Button
```jsx
<button className="border-2 border-kwaderno-brown text-kwaderno-brown hover:bg-kwaderno-brown hover:text-white font-bold py-3 px-6 rounded-lg transition-colors">
  Button Text
</button>
```

##### Icon Button
```jsx
<button className="flex items-center gap-2 bg-kwaderno-brown hover:bg-kwaderno-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
  <Icon className="h-5 w-5" />
  Button Text
</button>
```

#### Cards

##### Basic Card
```jsx
<div className="bg-white rounded-lg shadow-lg p-6">
  <h3 className="text-xl font-bold text-kwaderno-brown mb-2">Card Title</h3>
  <p className="text-gray-600">Card content goes here</p>
</div>
```

##### Menu Item Card
```jsx
<div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
  <div className="h-48 bg-gray-200 overflow-hidden">
    <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-kwaderno-brown">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
</div>
```

#### Forms

##### Input Field
```jsx
<div className="mb-6">
  <label className="block text-kwaderno-brown font-semibold mb-2">Label</label>
  <input
    type="text"
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kwaderno-brown"
    placeholder="Placeholder text"
  />
</div>
```

##### Input with Icon
```jsx
<div className="relative">
  <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
  <input
    type="text"
    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kwaderno-brown"
  />
</div>
```

### Spacing

#### Margin/Padding Scale
- **xs**: 2 (0.5rem / 8px)
- **sm**: 4 (1rem / 16px)
- **md**: 6 (1.5rem / 24px)
- **lg**: 8 (2rem / 32px)
- **xl**: 12 (3rem / 48px)
- **2xl**: 16 (4rem / 64px)

### Shadows

#### Shadow Scale
- **sm**: Small shadow for subtle depth
- **lg**: Large shadow for cards and modals
- **xl**: Extra large shadow for elevated elements

### Border Radius

#### Radius Scale
- **lg**: 0.5rem (8px) - Cards and buttons
- **full**: 9999px - Pill-shaped buttons and badges

### Transitions

#### Transition Classes
- **transition-colors**: Smooth color changes
- **transition-shadow**: Smooth shadow changes
- **transition-all**: Smooth all property changes
- **transform hover:scale-105**: Subtle scale on hover

### Responsive Design

#### Breakpoints
- **sm**: 640px - Small devices
- **md**: 768px - Tablets
- **lg**: 1024px - Laptops
- **xl**: 1280px - Desktops

#### Responsive Patterns
```jsx
{/* Grid that changes based on screen size */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Items */}
</div>

{/* Flex that wraps on mobile */}
<div className="flex flex-col md:flex-row gap-4">
  {/* Items */}
</div>

{/* Text that adjusts size */}
<h1 className="text-4xl md:text-5xl lg:text-6xl">
  Heading
</h1>
```

### Images

#### Image Sources
- **Logo**: `Resources/KwadernoLogo/KwadernoLogo.jpg`
- **Banner**: `Resources/KwadernoLogo/KwadernoBanner.jpg`
- **Menu Images**: `Resources/Coffee Menu/[Category]/[Image].jpg`

#### Image Handling
- All menu item photos are served from the backend at `http://localhost:5000/uploads/[filename]`
- Use `object-cover` for consistent image sizing
- Add hover effects for interactive elements

### Accessibility

#### Best Practices
- Use semantic HTML elements
- Provide alt text for all images
- Ensure sufficient color contrast
- Use proper heading hierarchy
- Make interactive elements keyboard accessible

### Animations

#### Loading Spinner
```jsx
<Loader className="h-12 w-12 animate-spin text-kwaderno-brown" />
```

#### Hover Effects
- Scale: `transform hover:scale-105`
- Shadow: `hover:shadow-xl`
- Color: `hover:bg-kwaderno-dark`

### Layout Patterns

#### Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

#### Section
```jsx
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### State Colors

#### Success
- Green shades for success messages

#### Error
- Red shades for error messages and destructive actions

#### Warning
- Yellow/Orange shades for warnings

#### Info
- Blue shades for informational messages

### Custom Classes

#### Kwaderno Theme
All custom colors are defined in `tailwind.config.js`:
- `kwaderno-brown`: Primary brand color
- `kwaderno-dark`: Darker shade
- `kwaderno-light`: Lighter shade
- `kwaderno-accent`: Accent color
- `kwaderno-cream`: Background color

### Notes

- Maintain consistency across all pages
- Use the established color palette for all UI elements
- Follow the component patterns for consistency
- Ensure responsive design for all screen sizes
- Test accessibility features regularly
