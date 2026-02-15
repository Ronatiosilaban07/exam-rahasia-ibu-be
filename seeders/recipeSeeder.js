const Recipe = require("../models/Recipe");

const autoSeedRecipes = async () => {
  try {

    const count = await Recipe.countDocuments();

    if (count > 0) {
      console.log("Recipes already exist, skip seeding");
      return;
    }

    console.log("Seeding default recipes...");

    const recipes = [
      {
        title: "Nasi Goreng Spesial",
        description: "Nasi goreng sederhana dan lezat untuk keluarga",

        image: "https://images.unsplash.com/photo-1604908176997-4314d50b0b0c",

        videoUrl: "https://www.youtube.com/watch?v=m3HIvWlR9oA",

        ingredients: [
          "2 piring nasi putih",
          "2 siung bawang putih",
          "1 butir telur",
          "2 sdm kecap manis",
          "Garam secukupnya",
          "Minyak goreng"
        ],

        steps: [
          "Panaskan minyak",
          "Tumis bawang putih",
          "Masukkan telur dan orak arik",
          "Masukkan nasi",
          "Tambahkan kecap dan garam",
          "Aduk rata dan sajikan"
        ]
      },

      {
        title: "Ayam Goreng Crispy",
        description: "Ayam goreng renyah dan gurih",

        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92",

        videoUrl: "https://www.youtube.com/watch?v=2z0z9D1V9xQ",

        ingredients: [
          "500 gram ayam",
          "Tepung serbaguna",
          "Garam",
          "Merica",
          "Minyak goreng"
        ],

        steps: [
          "Cuci ayam",
          "Lumuri dengan garam dan merica",
          "Baluri dengan tepung",
          "Goreng hingga kuning keemasan",
          "Angkat dan sajikan"
        ]
      },

      {
        title: "Soto Ayam",
        description: "Soto ayam hangat dan nikmat",

        image: "https://images.unsplash.com/photo-1625944525533-473f1e2d54e7",

        videoUrl: "https://www.youtube.com/watch?v=6f7XvZkq4I0",

        ingredients: [
          "500 gram ayam",
          "2 liter air",
          "Bawang putih",
          "Bawang merah",
          "Garam",
          "Daun bawang"
        ],

        steps: [
          "Rebus ayam",
          "Tumis bumbu",
          "Masukkan ke dalam rebusan",
          "Tambahkan garam",
          "Sajikan dengan daun bawang"
        ]
      },

      {
        title: "Bakwan Sayur",
        description: "Gorengan sehat dan lezat",

        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047c9",

        videoUrl: "https://www.youtube.com/watch?v=R8rm2vVYc6Q",

        ingredients: [
          "Kol",
          "Wortel",
          "Tepung terigu",
          "Air",
          "Garam",
          "Minyak goreng"
        ],

        steps: [
          "Campur semua bahan",
          "Aduk hingga rata",
          "Panaskan minyak",
          "Goreng hingga matang",
          "Angkat dan sajikan"
        ]
      }

    ];

    await Recipe.insertMany(recipes);

    console.log("Default recipes seeded");

  } catch (error) {

    console.log("Seeder recipes error:", error.message);

  }
};

module.exports = autoSeedRecipes;
