import {v2 as cloudinary} from "cloudinary"

const connectCloudinary = async () =>{
    cloudinary.config({
        cloud_name:dzhfgmeaz,
        api_key: "4djtbrNruyzZwAn9fiGcIOW4A30",
        api_secret: "@dzhfgmeaz",
    })
}

export default connectCloudinary;