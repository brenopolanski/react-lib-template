# React Library Template

A modern React component library template with TypeScript, TailwindCSS, ESLint, Prettier, and Vite.

## Features

- ⚛️ React 18+
- 🔷 TypeScript
- 🎨 TailwindCSS
- 📦 Vite for fast development and optimized builds
- 🧹 ESLint and Prettier for code quality
- 📝 Ready to publish to npm
- 📚 Simple demo app included

## Getting Started

### Using this template

1. Clone this repository or use it as a template
2. Update the package.json with your library details (name, version, author, etc.)
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```

### Development

The development server provides a demo app to test your components.

```bash
npm run dev
```

### Building for production

```bash
npm run build
```

This will create a production-ready bundle in the `dist` directory.

### Publishing to npm

1. Update the `package.json` with your library details
2. Build your library
   ```bash
   npm run build
   ```
3. Publish to npm
   ```bash
   npm publish
   ```

## Library Structure

```
├── dist/                  # Built library output
├── src/
│   ├── components/        # React components
│   │   ├── Button/        # Example component
│   │   │   ├── Button.tsx # Component implementation
│   │   │   └── index.ts   # Component exports
│   │   └── index.ts       # Components barrel file
│   ├── index.ts           # Main library exports
│   ├── App.tsx            # Demo application
│   └── main.tsx           # Demo application entry
├── .prettierrc            # Prettier configuration
├── eslint.config.js       # ESLint configuration
├── tailwind.config.js     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## Adding New Components

1. Create a new directory in `src/components`
2. Add your component files
3. Export your component in the component's index.ts
4. Add the export to `src/components/index.ts`

## Usage Example

```jsx
import { Button } from 'your-library-name';
import 'your-library-name/style.css'; // Import styles

function App() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
    </div>
  );
}
```

## License

MIT
