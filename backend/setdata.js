const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    // Insert a User
    const user = await prisma.user.create({
      data: {
        email: "testuser@example.com",
        password: "hashedpassword", // Use a hashed password in production
        name: "Test User",
        points: 100,
      },
    });

    console.log("User created:", user);

    // Insert Recycling Logs
    const recyclingLog = await prisma.recyclingLog.create({
      data: {
        userId: user.id,
        type: "plastic",
        weight: 2.5,
        points: 10,
        location: "Green Park, Sector 9",
      },
    });

    console.log("Recycling Log created:", recyclingLog);

    // Insert Reports
    const report = await prisma.report.create({
      data: {
        userId: user.id,
        type: "illegal_dumping",
        description: "Dumping of plastic waste near riverbank",
        location: "Sector 15, Riverside",
        severity: "high",
        images: [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
        ],
      },
    });

    console.log("Report created:", report);

    // Insert Facilities
    const facility = await prisma.facility.create({
      data: {
        name: "Eco Recycle Center",
        type: "recycling_center",
        location: "Sector 5, Eco Colony",
        address: "123 Green Street, Eco Colony",
        hours: "9 AM - 6 PM",
        acceptedMaterials: ["plastic", "paper", "metal"],
      },
    });

    console.log("Facility created:", facility);

    // Insert Rewards
    const reward = await prisma.reward.create({
      data: {
        title: "10% Discount Coupon",
        description: "Redeem this for a 10% discount on eco-friendly products",
        points: 50,
        type: "coupon",
        value: 10.0,
        expiresAt: new Date(new Date().setMonth(new Date().getMonth() + 1)), // Expires in 1 month
      },
    });

    console.log("Reward created:", reward);
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the function
// seedDatabase();

async function fun() {
  const hashedPassword = await bcrypt.hash("hashedpassword", 10);
  console.log(hashedPassword);
}
fun();
