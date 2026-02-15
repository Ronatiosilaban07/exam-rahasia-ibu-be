const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const autoSeedUsers = require("./seeders/userSeeder");
const autoSeedRecipes = require("./seeders/recipeSeeder");


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/recipes", require("./routes/recipeRoutes"));


// start server
const startServer = async () => {

  await connectDB();

  // auto seed
  await autoSeedUsers();

  await autoSeedRecipes()

  app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
  });

};

startServer();
