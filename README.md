# Uteach Landing Page

A responsive and high-performance landing page developed as part of the Front-End Developer test for Uteach. The project focuses on delivering a clean user interface, mobile-first experience, and optimized performance using semantic HTML, CSS, and vanilla JavaScript.

![Home Screen](./assets/Screenshot.png)

## 📱 Mobile-First Approach

The entire layout was built using the **mobile-first methodology**, ensuring that the experience is smooth and functional on smaller devices before adapting to larger screens.

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and SEO-friendly markup.
- **CSS3**: Responsive styling with media queries, animations, and utility classes.
- **Vanilla JavaScript**: To handle interactivity such as:
  - Feedback carousel navigation
  - Metrics counter animation on scroll
  - Mobile menu toggle
  - Dynamic content injection based on button clicks

> No frameworks or libraries were used to keep the project lightweight and performant.

## 🎯 Key Features

- Fully responsive layout across all devices
- Optimized image loading with `loading="lazy"`
- SEO-friendly structure with semantic tags and meta descriptions
- Animated elements using AOS (Animate On Scroll)
- Accessible navigation and buttons
- Metrics counter with smooth animation when visible
- Feedback system with dynamic text changes
- Horizontal carousel with scroll snap and button navigation
- Clean and intuitive visual hierarchy

## 🧠 Why Vanilla JS?

Since this is a **simple landing page** with minimal interactivity, using plain JavaScript helped:
- Avoid unnecessary complexity
- Preserve loading speed
- Ensure better SEO by avoiding client-side rendering
- Deliver a clean, understandable codebase

## ⚙️ Project Structure

```
├── index.html
├── styles/
│   ├── index.css
│   ├── hero.css
│   └── ...
├── scripts/
│   ├── script.js
│   └── feedbacks.js
├── assets/
│   └── images and icons
├── README.md
├── sitemap.xml
└── robots.txt
```

## 📦 Deployment Notes

This project can be deployed on any static hosting platform (like GitHub Pages, Netlify, or Vercel) without server-side configuration.

## 🔐 SEO & Accessibility

- Semantic tags were used to improve accessibility.
- `robots.txt` and `sitemap.xml` are included to guide search engine crawlers.
- Images contain descriptive `alt` tags.
- Buttons contain descript `arial-label` tags.

## 🧪 Requirements Covered

- [x] Responsive layout
- [x] Good performance and loading speed
- [x] Clear UI and UX
- [x] Code readability and organization
- [x] Mobile-first development
- [x] SEO-optimized structure
- [x] Working interactivity via JS
