import './styles/global.css';

export const metadata = {
  title: 'grace<code/>',
  description: 'a collection of useful tools for everyday tasks',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-night min-h-screen">
        <nav className="bg-cerulean text-white p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">grace&lt;code/&gt;</a>
            <div className="space-x-4">
              <a href="/gracecase" className="hover:text-tiffanyBlue">grace&lt;case/&gt;</a>
              <a href="/gracecapture" className="hover:text-tiffanyBlue">grace&lt;capture/&gt;</a>
              <a href="/gracecalculate" className="hover:text-tiffanyBlue">grace&lt;calculate/&gt;</a>
              <a href="/gracecrypt" className="hover:text-tiffanyBlue">grace&lt;crypt/&gt;</a>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto p-4">
          {children}
        </main>
        <footer className="bg-cerulean text-white p-4 mt-8">
          <div className="max-w-7xl mx-auto text-center">
            © 2024 grace&lt;code/&gt;. all rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
