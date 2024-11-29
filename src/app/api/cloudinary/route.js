import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req, res) {
    try {
      const formData = await req.json();

      const file = formData.base64;

      const result = await cloudinary.uploader.upload(file, {
        folder: "sambandha", 
      }, (error, result) => {
        if (error) {
          console.error("Upload error:", error);
        } else {
          return result;
        }
      });

      return NextResponse.json({
          success: true,
          url: result.secure_url
      }, {
          status: 200
      })


    } catch (error) {
      console.error('Cloudinary upload error:', error);
        return NextResponse.json({
            success: false,
            message: "failed to upload image"
        }, {
            status: 500
        })
    }
}
