'use client';

import { useState } from 'react';

export default function DocumentUpload({ setDocumentImage }) {
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDocumentImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <label className="block mb-2">Upload Document Photo:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-2"
      />
      {previewUrl && (
        <img src={previewUrl} alt="Document preview" className="max-w-xs" />
      )}
    </div>
  );
}

