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

        image: "https://www.google.com/imgres?q=png%20nasi%20goreng&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fe%2Fed%2FNasi_goreng_seafood.png&imgrefurl=https%3A%2F%2Fid.wikipedia.org%2Fwiki%2FBerkas%3ANasi_goreng_seafood.png&docid=yt48DEvGAZG9hM&tbnid=0IdhT1SHxEcgCM&vet=12ahUKEwj57-vVmtySAxWCSWwGHVAAHvIQnPAOegQIGhAB..i&w=617&h=411&hcb=2&ved=2ahUKEwj57-vVmtySAxWCSWwGHVAAHvIQnPAOegQIGhAB",

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

        image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Nasi_goreng_seafood.png",

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

        image: "https://www.dapurkobe.co.id/soto-ayamhttps://www.dapurkobe.co.id/wp-content/uploads/soto-ayam.jpg",

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
        title: "Bakwan Sayur",
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
