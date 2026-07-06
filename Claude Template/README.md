# Portfolio Website

A modern, responsive portfolio website for a Machine Learning PhD researcher with interests in Quantitative Finance, App Development, and Game Development.

## Project Structure

```
portfolio/
├── index.html           # Main HTML file
├── styles.css          # Custom CSS styles (Tailwind imports)
├── script.js           # JavaScript for interactivity
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # This file
```

## Features

- **Responsive Design**: Works on all devices (desktop, tablet, mobile)
- **Modern UI**: Dark theme with elegant typography and smooth animations
- **Sections**:
  - Hero section with introduction
  - Work/Research showcase
  - Hobbies and interests
  - Blog section (ready for content)
  - Contact section with social links
- **Interactive Elements**:
  - Smooth scrolling navigation
  - Scroll-reveal animations
  - Hover effects on cards and buttons
  - Animated background

## Setup

### Using CDN (Quick Start)

The current setup uses Tailwind CDN and is ready to use immediately. Just open `index.html` in your browser.

### For Production (Recommended)

If you want to use this in production, you should compile Tailwind CSS properly:

1. **Install dependencies:**
   ```bash
   npm init -y
   npm install -D tailwindcss
   ```

2. **Build CSS:**
   ```bash
   npx tailwindcss -i ./styles.css -o ./dist/output.css --watch
   ```

3. **Update HTML:**
   Replace the CDN link in `index.html` with:
   ```html
   <link rel="stylesheet" href="dist/output.css">
   ```

## Customization

### Colors
Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  'deep-bg': '#0a0e13',
  'surface': '#141821',
  'accent': '#f5e6d3',
  // ... more colors
}
```

### Fonts
Google Fonts are loaded in `styles.css`. To change fonts:
1. Update the import URL in `styles.css`
2. Update the font families in `tailwind.config.js`

### Content
- Update text content directly in `index.html`
- Replace placeholder social media links in the Contact section
- Add your own blog posts to the Blog section

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Vanilla JS for interactions
- **Google Fonts**: Playfair Display & DM Sans

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

Feel free to use this template for your own portfolio!
