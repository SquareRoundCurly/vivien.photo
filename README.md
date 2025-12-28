# 📸 Photographer Portfolio Website

A minimal, elegant static website perfect for photographers. Built with pure HTML, CSS, and JavaScript - ready to deploy on GitHub Pages.

## ✨ Features

- **Minimalist Design**: Clean, professional aesthetic that puts your photography first
- **Responsive Gallery**: Grid layout that adapts beautifully to all screen sizes
- **Lightbox Viewer**: Full-screen image viewing with keyboard navigation
- **Smooth Animations**: Subtle fade-in effects and transitions
- **Fast Loading**: Optimized for performance with lazy loading
- **GitHub Pages Ready**: Deploy in minutes

## 🚀 Quick Start

### Option 1: Open Locally
Simply open `index.html` in your web browser to view the site.

### Option 2: Use a Local Server
For the best experience (especially if you add your own images locally):

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📝 Customization Guide

### 1. Replace Placeholder Images

The site currently uses placeholder images from picsum.photos. To add your own photos:

**Option A: Edit the JavaScript array (for online images)**

Open `script.js` and modify the `galleryImages` array:

```javascript
const galleryImages = [
    { src: 'images/photo1.jpg', alt: 'Description 1' },
    { src: 'images/photo2.jpg', alt: 'Description 2' },
    // Add more images...
];
```

**Option B: Add local images**

1. Create an `images` folder in the project root
2. Add your photos to this folder
3. Update `script.js` with your image filenames (see Option A)

**Recommended Image Specs:**
- Format: JPG or WebP
- Size: 1200-2000px on longest side
- Compression: Optimize for web (use tools like TinyPNG)

### 2. Update Site Content

**Site Name & Branding**
- Open `index.html`
- Change "VIVI" in the navigation to your name/brand
- Update the hero title and subtitle

**Contact Information**
- Edit the email and phone number in the contact section
- Update social media links (Instagram, Twitter, etc.)

**Meta Tags**
- Update the `<title>` and description in `<head>` section

### 3. Customize Colors & Styling

Open `styles.css` and modify the CSS variables at the top:

```css
:root {
    --bg-primary: #ffffff;        /* Main background */
    --bg-secondary: #f8f8f8;      /* Secondary background */
    --text-primary: #1a1a1a;      /* Main text color */
    --text-secondary: #666666;    /* Secondary text */
    --accent: #1a1a1a;            /* Accent color */
}
```

## 🌐 Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it whatever you like (e.g., `photographer-portfolio`)
3. Don't initialize with README (we already have one)

### Step 2: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Photographer portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Optional: Use a Custom Domain

1. Buy a domain name
2. Add a `CNAME` file to your repository with your domain
3. Configure DNS settings with your domain provider
4. See [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 📁 Project Structure

```
vivi/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Gallery & lightbox functionality
├── README.md           # This file
└── images/            # Your photos go here (create this folder)
```

## 🎨 Design Philosophy

This portfolio follows minimalist design principles:
- **Clean layout**: Plenty of white space
- **Typography-focused**: Simple, readable fonts
- **Image-first**: Your photography is the star
- **Subtle animations**: Smooth, professional transitions
- **Mobile-optimized**: Perfect on all devices

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Feel free to use this template for your own photography portfolio. No attribution required, but always appreciated!

## 💡 Tips for Photographers

1. **Image Quality**: Use high-quality, well-compressed images
2. **Consistency**: Maintain a cohesive style across your gallery
3. **Curation**: Less is more - show your best work only
4. **SEO**: Update meta tags and alt text for better search visibility
5. **Loading Speed**: Optimize images to keep the site fast

## 🐛 Troubleshooting

**Images not loading?**
- Check file paths in `script.js`
- Ensure images are in the correct folder
- Verify image filenames match exactly (case-sensitive)

**Lightbox not working?**
- Check browser console for JavaScript errors
- Ensure `script.js` is properly linked in `index.html`

**Layout issues on mobile?**
- Clear browser cache
- Test in multiple browsers
- Check for CSS syntax errors

## 📞 Support

For issues or questions, check the code comments or open an issue on GitHub.

---

**Built with ❤️ for photographers**
