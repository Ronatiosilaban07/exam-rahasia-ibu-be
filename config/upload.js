const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "recipes",
    resource_type: "auto", // penting untuk image & video
  },
});

const upload = multer({ storage });

module.exports = upload;
