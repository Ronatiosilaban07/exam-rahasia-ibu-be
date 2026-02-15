const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipeController");
const authMiddleware = require("../middleware/authMiddleware");


router.get("/", authMiddleware, recipeController.getRecipes);

router.get("/:id", authMiddleware, recipeController.getRecipeDetail);

router.post("/", authMiddleware, recipeController.createRecipe);


module.exports = router;
