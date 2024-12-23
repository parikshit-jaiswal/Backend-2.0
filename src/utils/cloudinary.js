import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadOnCloudinary = async (localFilePath) => {

    try {
        if (!localFilePath) return null;
        const res = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("file is uploaded on cloudinary : ", res.url);
        return res;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    };


    // await cloudinary.uploader
    //     .upload(
    //         'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
    //         public_id: 'shoes',
    //     }
    //     )
    //     .catch((error) => {
    //         console.log(error);
    //     });

    // console.log(uploadResult);
}