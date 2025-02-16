import multer from 'multer';
import multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';

dotenv.config();

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

const upload=multer({
    storage: multerS3({
        s3:s3,
        bucket: process.env.BUCKET_NAME,
        metadata: function(req,file,cb){
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req,file,cb){
            cb(null, `uploads/${Date.now().toString()}-${file.originalname}`)
        }
    })
})

export default upload;