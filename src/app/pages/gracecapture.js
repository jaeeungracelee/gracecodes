'use client';
import { useState } from 'react';

export default function GraceCapture() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('/api/ocr', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error processing image');
      }

      const result = await response.json();
      setText(result.text);
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-cerulean mb-6">GraceCapture</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="file" accept="image/*,application/pdf" onChange={handleFileChange} />
        <button
          type="submit"
          className="bg-cerulean text-white px-4 py-2 rounded hover:bg-tiffanyBlue"
        >
          upload and convert
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {text && (
        <textarea
          className="w-full p-2 border border-tiffanyBlue rounded mt-4"
          rows="10"
          value={text}
          readOnly
        ></textarea>
      )}
    </div>
  );
}
