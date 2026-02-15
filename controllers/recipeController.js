const Recipe = require("../models/Recipe");

const getRecipes = async (req, res) => {
  try {

    const { search } = req.query;

    let filter = {};

    if (search) {
      filter = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
        ],
      };
    }

    const recipes = await Recipe.find(filter).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: recipes,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const getRecipeDetail = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRecipe = async (req, res) => {
  try {

    const image = req.files?.image?.[0]?.path || null;
    const video = req.files?.video?.[0]?.path || null;

    const recipe = await Recipe.create({
      title: req.body.title,
      description: req.body.description,

      image: image,
      videoUrl: video,

      ingredients: req.body.ingredients || [],
      steps: req.body.steps || [],
    });

    res.status(201).json({
      success: true,
      data: recipe,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getRecipes,
  getRecipeDetail,
  createRecipe,
};
