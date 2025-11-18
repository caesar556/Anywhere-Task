# React + TypeScript + Vite Project

## Overview
This is a minimal React + TypeScript + Vite starter template featuring:
- React 19.2.0 with TypeScript
- Vite 7.2.2 for fast development and building
- ESLint for code quality
- Hot Module Replacement (HMR) for instant updates

## Project Structure
```
/
├── public/           # Static assets
├── src/
│   ├── assets/      # React logo and other assets
│   ├── App.tsx      # Main app component
│   ├── App.css      # App styles
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles
├── vite.config.ts   # Vite configuration (configured for Replit)
└── package.json     # Dependencies and scripts
```

## Configuration
- **Development Server**: Configured to run on `0.0.0.0:5000` for Replit compatibility
- **HMR**: WebSocket configured for Replit's proxy environment
- **Build Tool**: Vite with TypeScript and React plugin

## Available Scripts
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Recent Changes
- **2025-11-18**: Configured Vite for Replit environment (port 5000, host 0.0.0.0, HMR settings)
- **2025-11-18**: Set up workflow for automatic dev server startup
- **2025-11-18**: Installed dependencies and verified application runs correctly
