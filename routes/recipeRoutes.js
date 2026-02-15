const express = require("express");
const router = express.Router();

const recipeController = require("../controllers/recipeController");
const authMiddleware = require("../middleware/authMiddleware");

const upload = require("../config/upload");
router.get("/", authMiddleware, recipeController.getRecipes);

router.get("/:id", authMiddleware, recipeController.getRecipeDetail);

router.post(
  "/",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 },
  ]),
  recipeController.createRecipe
);


module.exports = router;
