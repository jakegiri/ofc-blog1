import { PrismaClient } from ".prisma/client";
import faker from "faker";

const prisma = new PrismaClient();

async function main() {
  let catagoryName: string;
  for (let i = 0; i < 100; i++) {
    catagoryName = faker.vehicle.color();

    await prisma.post.create({
      data: {
        title: `About ${faker.company.companyName()} company`,
        description: faker.company.catchPhraseDescriptor(),
        content: faker.lorem.paragraphs(),
        catagories: {
          create: {
            catagory: {
              connectOrCreate: {
                where: { name: catagoryName },
                create: { name: catagoryName },
              },
            },
          },
        },
      },
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
