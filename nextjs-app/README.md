# Investally - Financial Services Website

A modern, responsive financial services website built with Next.js 16, TypeScript, Tailwind CSS, and shadcn-ui.

## Features

- **Modern Tech Stack**: Built with Next.js 16 App Router, TypeScript, and Tailwind CSS
- **Beautiful UI Components**: Leveraging shadcn-ui for polished, accessible components
- **Responsive Design**: Fully responsive layout that works on all devices
- **Gradient Animations**: Eye-catching animated gradient backgrounds
- **Interactive Navigation**: Dropdown menus and mobile-responsive navigation
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Sections Included

1. **Navigation Header**
   - Logo and brand
   - Desktop navigation with dropdown menu for products
   - Mobile-responsive hamburger menu
   - "Get Started" CTA button

2. **Hero Section**
   - Large animated gradient background
   - Compelling headline and subheadline
   - Two CTA buttons
   - Quick stats display (AUM, Clients, Experience)
   - Decorative elements

3. **Market Tickers**
   - Live market indicators for NIFTY 50, SENSEX, and GOLD
   - Color-coded trending indicators

4. **About Section**
   - Company overview
   - Four key features with icons
   - Client satisfaction stat highlight

5. **Products Section**
   - Three main product cards:
     - Portfolio Management
     - Insurance Solutions
     - Home & Personal Loans
   - Four additional service highlights
   - Hover animations on cards

6. **Footer**
   - Brand information
   - Contact details
   - Quick links
   - Services list

## Getting Started

### Development Server

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and custom utilities
├── components/
│   ├── ui/                 # shadcn-ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── dropdown-menu.tsx
│   ├── sections/           # Page sections
│   │   ├── hero-section.tsx
│   │   ├── market-tickers.tsx
│   │   ├── about-section.tsx
│   │   └── products-section.tsx
│   ├── navigation.tsx      # Header navigation
│   └── footer.tsx          # Footer component
└── package.json
```

## Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS v4**: Utility-first CSS framework
- **shadcn-ui**: Beautiful, accessible component library
- **Lucide React**: Icon library (replacement for Feather Icons)
- **Inter Font**: Google font for clean typography

## Custom Styles

Custom utilities added in `globals.css`:
- `.gradient-text` - Gradient text effect
- `.gradient-bg` - Animated gradient background
- `.card-hover` - Smooth hover animations for cards

## Color Scheme

Primary colors from the original design:
- Teal: `#0d9488`, `#14b8a6`
- Supporting colors: Green, Blue, Purple, Orange for different services

## Next Steps

To extend this website, consider adding:
- Calculators page (SIP, EMI, etc.)
- Team section with member profiles
- Blog page with articles
- Contact form with backend integration
- Testimonials section
- More detailed product pages
- Authentication for user dashboard
- Real-time market data integration

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn-ui](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)

## License

All rights reserved © 2025 Investally
