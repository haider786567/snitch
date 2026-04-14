import ImageKit, { toFile } from '@imagekit/nodejs';
import config from '../config/config.js';

const client = new ImageKit({
  privateKey: process.env['IMAGEKIT_KEY'], // This is the default and can be omitted
});

export async function UploadImage({buffer,fileName,folder = "snitch"}) {
    try{
        const response = await client.files.upload({
            file: await toFile(buffer),
            fileName: fileName,
            folder: folder
        });
        return response;
    }catch(err){
        console.error("Error uploading image to ImageKit:", err);
        throw new Error("Failed to upload image");
    }
}