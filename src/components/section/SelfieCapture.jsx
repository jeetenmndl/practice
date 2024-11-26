'use client';

import { useState, useRef } from 'react';
import Webcam from 'react-webcam';

export default function SelfieCapture({ setSelfieImage, selfieImage }) {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const webcamRef = useRef(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSelfieImage(imageSrc);
    setIsCameraOpen(false);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsCameraOpen(!isCameraOpen)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-2"
      >
        {isCameraOpen ? 'Close Camera' : 'Open Selfie Camera'}
      </button>
      {isCameraOpen && (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="mb-2"
          />
          <button
            type="button"
            onClick={captureImage}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Capture Selfie
          </button>
        </div>
      )}
      {selfieImage && !isCameraOpen && (
        <div>
          <img src={selfieImage} alt="Captured selfie" className="max-w-xs mt-2" />
          <button
            type="button"
            onClick={() => setIsCameraOpen(true)}
            className="block mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Retake Selfie
          </button>
        </div>
      )}
    </div>
  );
}

