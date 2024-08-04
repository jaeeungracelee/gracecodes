import { useState } from 'react';

export default function GraceCase() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const convertCase = (type) => {
    switch (type) {
      case 'upper':
        setResult(text.toUpperCase());
        break;
      case 'lower':
        setResult(text.toLowerCase());
        break;
      case 'title':
        setResult(
          text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
        );
        break;
      default:
        setResult(text);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-cerulean mb-8">GraceCase</h1>
      <div className="space-y-4">
        <textarea
          className="w-full h-32 p-2 border border-tiffanyBlue rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
        />
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-cerulean text-white rounded hover:bg-tiffanyBlue"
            onClick={() => convertCase('upper')}
          >
            UPPERCASE
          </button>
          <button
            className="px-4 py-2 bg-cerulean text-white rounded hover:bg-tiffanyBlue"
            onClick={() => convertCase('lower')}
          >
            lowercase
          </button>
          <button
            className="px-4 py-2 bg-cerulean text-white rounded hover:bg-tiffanyBlue"
            onClick={() => convertCase('title')}
          >
            Title Case
          </button>
        </div>
        {result && (
          <div className="mt-4 p-4 bg-lilac rounded">
            <h2 className="text-lg font-semibold mb-2">Result:</h2>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
