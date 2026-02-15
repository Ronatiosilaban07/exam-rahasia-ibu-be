const User = require("../models/User");
const bcrypt = require("bcryptjs");

const autoSeedUsers = async () => {
  try {

    const count = await User.countDocuments();

    if (count > 0) {
      console.log("Users already exist, skip seeding");
      return;
    }

    console.log("Seeding default users...");

    const users = [
      {
        name: "Admin RahasiaBunda",
        email: "admin@rahasia.com",
        password: "123456"
      },
      {
        name: "Ibu Siti",
        email: "siti@mail.com",
        password: "123456"
      },
      {
        name: "Ibu Dewi",
        email: "dewi@mail.com",
        password: "123456"
      },
      {
        name: "Ibu Rina",
        email: "rina@mail.com",
        password: "123456"
      }
    ];

    const hashedUsers = await Promise.all(
      users.map(async (user) => ({
        ...user,
        password: await bcrypt.hash(user.password, 10)
      }))
    );

    await User.insertMany(hashedUsers);

    console.log("Default users seeded");

  } catch (error) {
    console.log(error.message);
  }
};

module.exports = autoSeedUsers;
