# Elyza Events - Sophisticated Event Management

Elyza Events is a comprehensive event management web application designed to help users plan, customize, and book bespoke events. The platform specializes in a variety of celebrations, including weddings, anniversaries, corporate galas, and memorial services. It features an intuitive, visually stunning interface that emphasizes aesthetics, user experience, and seamless interactivity.

## Features & Functionalities

- **Dynamic Event Categories:** Browse through dedicated sections for Weddings, Birthdays, Reunions, Baptisms, and Memorials, each dynamically populated with tailored packages and unique imagery.
- **Interactive Gallery:** A responsive masonry image gallery featuring category-based filtering and an immersive lightbox viewer to explore the agency's portfolio.
- **Custom Event Builder:** Users can generate personalized event estimates by answering dynamic configuration questions (e.g., guest count, location, style preferences).
- **Add-On Service Marketplace:** A modular setup allowing users to seamlessly add premium enhancements like Gourmet Catering, Light & Sound, and D\xE9cor to their event packages.
- **Testimonial Carousel & Review System:** Real-time rotating customer reviews with a built-in form for new clients to submit their own 5-star ratings and feedback.
- **Protected Booking Flow:** Secure, authenticated portal for reserving event dates and processing client bookings.
- **Smooth UX Enhancements:** Features custom scroll-reveal animations, animated back-to-top navigation, and contextual sticky header shrinking for premium navigational feel on any device.

##Tech Stack & Modules

This project is built on a modern, fast, and scalable frontend architecture:

| Technology / Module | Purpose & Usage |
| :--- | :--- |
| **React 19** | The core UI library. It expertly manages component state, component lifecycle, and rendering optimized virtual DOM updates across all pages (Home, Gallery, Booking, etc). |
| **Vite** | An ultra-fast build tool and development server used to bundle the application, providing near-instant hot-module replacement (HMR) for an excellent developer experience. |
| **React Router v7** | Manages client-side routing, enabling seamless zero-refresh SPA navigation between the Home, Gallery, Categories, Add-Ons, and Protected Route layers. |
| **Tailwind CSS** | A utility-first CSS framework natively injected into the workflow. Custom overarching theme configurations define the primary "soft lavender twilight" design system for consistent scaling. |
| **jQuery** | Used specifically as an independent, lightweight presentation layer to handle complex DOM observation (like scroll-reveal viewport checks) without causing expensive React re-renders. Controls fade-up animations and the dynamic floating back-to-top functionality. |
| **Lucide React** | A clean, consistent SVG icon library used extensively across the UI to visually anchor buttons, service feature lists, and navigational elements. |
| **Firebase** | Provides critical backend-as-a-service (BaaS) capabilities; specifically used to bridge the application's authentication system and successfully guard protected routes (`/booking`, `/customize`). |
| **Three.js** | Available within the dependency layer to allow experimental 3D rendering and immersive visual elements within specialized event pavilion segments. |

## Local Development

**Prerequisites:** Node.js (v18+ recommended)

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Ensure you have a `.env.local` configured if connecting to bespoke backend triggers (e.g. `GEMINI_API_KEY`).

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Design System

The application relies entirely on a bespoke color palette engineered to evoke luxury, celebration, and sophisticated tranquility:
- **Navy (`#29304C`)**: Deep, sophisticated base for strong typography contrast.
- **Plum (`#89758C`)**: Rich accent for focused interactive elements.
- **Mauve (`#AA91A1`)**: Mid-tone used for card borders and subtle gradient stops.
- **Mist (`#ECDAE8`)**: Soft lavender twilight shade utilized as the overarching primary background canvas.

Global aesthetic behaviors (glassmorphism overlays, soft box-shadows, and smooth CSS cubic-bezier transitions) are enforced via raw `index.css` overrides combined with Tailwind.
