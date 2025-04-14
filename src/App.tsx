import { Button } from './components'

const App = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">React Library Component Demo</h1>

        <div className="mb-8">
          <h2 className="mb-3 text-lg font-medium text-gray-700">Button Variants</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 text-lg font-medium text-gray-700">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-medium text-gray-700">Button States</h2>
          <div className="flex flex-wrap gap-2">
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
      </div>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>React library template with TypeScript, TailwindCSS, ESLint, Prettier, and Vite.</p>
      </footer>
    </div>
  )
}

export default App
