import Link from 'next/link';
// import { Tool } from 'lucide-react'; // commented out for testing 
// after removing tool the site builds fine now
// dunno why it wasn't working before LOL
import GraceCase from './pages/gracecase';
import GraceCapture from './pages/gracecapture';
import GraceCrypt from './pages/gracecrypt';

const tools = [
  { name: 'graceCase', description: 'Convert text case', href: '/gracecase' },
  { name: 'graceCapture', description: 'Extract text from images', href: '/gracecapture' },
  { name: 'graceCalculate', description: 'Calculate grade average', href: '/gracecalculate' },
  { name: 'graceCrypt', description: 'Generate secure passwords', href: '/gracecrypt' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 sm:py-20">
          <h1 className="text-4xl font-extrabold text-cerulean sm:text-5xl md:text-6xl">
            gracecodes
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-night sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            a collection of useful tools for everyday tasks
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="relative rounded-lg border border-tiffanyBlue bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-cerulean focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-cerulean"
              >
                <div className="flex-shrink-0">
                  {/* replaced the tool component with a simple div for testing */}
                  <div className="h-6 w-6 bg-cerulean" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-night">{tool.name}</p>
                  <p className="text-sm text-lilac truncate">{tool.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <GraceCase />
        </div>

        <div className="mt-10">
          <GraceCapture />
        </div>

        <div className="mt-10">
          <GraceCrypt />
        </div>

      </main>
    </div>
  );
}
