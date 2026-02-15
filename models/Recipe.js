const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String, // URL dari Cloudinary
      default: null,
    },

    videoUrl: {
      type: String, // URL dari Cloudinary
      default: null,
    },

    ingredients: {
      type: [String],
      default: [],
    },

    steps: {
      type: [String],
      default: [],
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
