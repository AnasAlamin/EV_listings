# Aampere EV Marketplace

A modern, performant electric vehicle marketplace built with Next.js and TailwindCSS.

## Features

- 🚗 Vehicle listing with search, filter, and sort functionality
- 📱 Responsive design for all screen sizes
- ⚡️ Fast page loads with Next.js
- 🎨 Beautiful UI with shadcn/ui components
- ♿️ Accessible design with ARIA labels and keyboard navigation
- 🔍 SEO optimized with metadata

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `/app` - Next.js app directory
  - `/components` - Reusable UI components
  - `/lib` - Utility functions and data
  - `/types` - TypeScript type definitions
  - `/vehicles` - Vehicle detail pages

## Performance Optimizations

- Image optimization with next/image
- Client-side navigation with next/link
- Component-level code splitting
- Efficient state management with URL parameters
- Responsive images and lazy loading

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly content

## Testing

To run tests:
```bash
npm test
```

## Docker

Build and run the application using Docker:

```bash
docker build -t aampere-ev .
docker run -p 3000:3000 aampere-ev
```

## Deploymeent

The app has been deployed on Vercel, any commit on main will trigger a new build on Vercel. [View Here](https://ev-listings-zh4j.vercel.app/)
