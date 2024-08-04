import Link from 'next/link';
import { Tool } from 'lucide-react';

const tools = [
  { name: 'GraceCase', description: 'Convert text case', href: '/gracecase' },
  { name: 'GraceCapture', description: 'Extract text from images', href: '/gracecapture' },
  { name: 'GraceCalculate', description: 'Calculate grade average', href: '/gracecalculate' },
  { name: 'GraceCrypt', description: 'Generate secure passwords', href: '/gracecrypt' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 sm:py-20">
          <h1 className="text-4xl font-extrabold text-cerulean sm:text-5xl md:text-6xl">
            Graceful Toolkit
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-night sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A collection of useful tools for everyday tasks
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
                  <Tool className="h-6 w-6 text-cerulean" />
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
      </main>
    </div>
  );
}
