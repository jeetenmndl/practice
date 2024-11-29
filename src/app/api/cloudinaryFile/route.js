import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req, res) {
    try {
      const {buffer} = await req.json();


     const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { 
            folder: 'sambandha',
            quality: 'auto:eco',
            format: 'jpg',
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(buffer);
      });

      console.log(result)


      return NextResponse.json({
          success: true,
          docUrl: result.secure_url
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
