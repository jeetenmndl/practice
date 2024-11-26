'use client';

import { useState } from 'react';
import DocumentUpload from './DocumentUpload';
import SelfieCapture from './SelfieCapture';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';

export default function VerificationForm() {
  const [documentImage, setDocumentImage] = useState(null);
  const [selfieImage, setSelfieImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!documentImage || !selfieImage) {
      alert('Please upload both document and selfie images');
      return;
    }

    const formData = new FormData();
    formData.append('document', documentImage);
    formData.append('selfie', selfieImage);

    // Log the form data
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  return (
    <Card className="w-1/3">
    <form onSubmit={handleSubmit} className="space-y-4">
        <CardContent>
      <DocumentUpload setDocumentImage={setDocumentImage} />
      <SelfieCapture setSelfieImage={setSelfieImage} selfieImage={selfieImage} />
      </CardContent>

      <CardFooter>
      <Button
        type="submit"
        className="w-full"
      >
        Submit Verification
      </Button>
      </CardFooter>
    </form>
    </Card>
  );
}

