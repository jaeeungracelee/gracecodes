'use client';
import { useState } from 'react';

export default function GraceCrypt() {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allCharacters = '';
    if (includeUppercase) allCharacters += uppercase;
    if (includeLowercase) allCharacters += lowercase;
    if (includeNumbers) allCharacters += numbers;
    if (includeSymbols) allCharacters += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      generatedPassword += allCharacters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-cerulean mb-6">GraceCrypt</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-night">Password Length</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="4"
            max="50"
            className="w-full p-2 border border-tiffanyBlue rounded"
          />
        </div>
        <div>
          <label className="block text-night">Include Uppercase</label>
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
        </div>
        <div>
          <label className="block text-night">Include Lowercase</label>
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
        </div>
        <div>
          <label className="block text-night">Include Numbers</label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        </div>
        <div>
          <label className="block text-night">Include Symbols</label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
        </div>
        <button
          onClick={generatePassword}
          className="bg-cerulean text-white px-4 py-2 rounded hover:bg-tiffanyBlue"
        >
          Generate Password
        </button>
        {password && (
          <textarea
            className="w-full p-2 border border-tiffanyBlue rounded mt-4"
            rows="2"
            value={password}
            readOnly
          ></textarea>
        )}
      </div>
    </div>
  );
}
