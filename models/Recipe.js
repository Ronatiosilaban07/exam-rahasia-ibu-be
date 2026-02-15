const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    videoUrl: String,
    ingredients: [String],
    steps: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeSchema);
