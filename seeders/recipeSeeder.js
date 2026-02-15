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

        image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Nasi_goreng_seafood.png",

        videoUrl: "https://www.youtube.com/watch?v=zdMA5BxrofM&list=RDzdMA5BxrofM&start_radio=1",

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

        image: "https://asset.kompas.com/crops/pbx_yXJty_AXSF_LLbyppjE8A1k=/72x15:952x601/1200x800/data/photo/2022/08/01/62e73d60a9595.jpg",

        videoUrl: "https://www.youtube.com/watch?v=zdMA5BxrofM&list=RDzdMA5BxrofM&start_radio=1",

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

        image: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/23f62312738135ab286e78812093c46b/Derivates/2e373c2ef0bf36c9e8475cbf93347db5a3496309.jpg",

        videoUrl: "https://www.youtube.com/watch?v=zdMA5BxrofM&list=RDzdMA5BxrofM&start_radio=1",

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
        title: "Bakwan Sayr",
        description: "Gorengan sehat dan lezat",

        image: "https://images.tokopedia.net/img/KRMmCm/2023/6/13/d8a2cddd-0f20-4026-9118-97ee0a1934a0.jpg",

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
