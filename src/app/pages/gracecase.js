'use client';
import { useState } from 'react';

export default function GraceCase() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [caseType, setCaseType] = useState('uppercase');

  const handleConvert = () => {
    switch (caseType) {
      case 'uppercase':
        setOutput(input.toUpperCase());
        break;
      case 'lowercase':
        setOutput(input.toLowerCase());
        break;
      case 'titlecase':
        setOutput(input.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
        break;
      default:
        setOutput(input);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-cerulean mb-6">gracecase</h1>
      <div className="space-y-4">
        <textarea
          className="w-full p-2 border border-tiffanyBlue rounded"
          rows="5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="enter your text here..."
        ></textarea>
        <div className="flex space-x-4">
          <select
            className="p-2 border border-tiffanyBlue rounded"
            value={caseType}
            onChange={(e) => setCaseType(e.target.value)}
          >
            <option value="uppercase">UPPERCASE</option>
            <option value="lowercase">lowercase</option>
            <option value="titlecase">Title Case</option>
          </select>
          <button
            className="bg-cerulean text-white px-4 py-2 rounded hover:bg-tiffanyBlue"
            onClick={handleConvert}
          >
            Convert
          </button>
        </div>
        <textarea
          className="w-full p-2 border border-tiffanyBlue rounded"
          rows="5"
          value={output}
          readOnly
          placeholder="converted text will appear here..."
        ></textarea>
      </div>
    </div>
  );
}
