import { CreateAsset } from "../../domain/interfaces/asset/asset.interface";
import { CreateClient } from "../../domain/interfaces/client/client.interface";
import { Prisma } from "./prisma/prisma-client";

const prismaClient = Prisma;

const assets: CreateAsset[] = [
  { name: "Apple Inc. (AAPL)", currtentValue: 192.25 },
  { name: "Microsoft Corp. (MSFT)", currtentValue: 415.6 },
  { name: "Alphabet Inc. (GOOGL)", currtentValue: 178.35 },
  { name: "Amazon.com Inc. (AMZN)", currtentValue: 186.7 },
  { name: "NVIDIA Corp. (NVDA)", currtentValue: 1143.2 },
  { name: "Meta Platforms Inc. (META)", currtentValue: 488.1 },
  { name: "Tesla Inc. (TSLA)", currtentValue: 178.45 },
  { name: "Berkshire Hathaway Inc. (BRK.B)", currtentValue: 423.35 },
  { name: "Johnson & Johnson (JNJ)", currtentValue: 147.9 },
  { name: "Visa Inc. (V)", currtentValue: 273.8 },
];

const clients: CreateClient[] = [
  {
    name: "Alice Silva",
    email: "alice.silva@example.com",
  },
  {
    name: "Bruno Oliveira",
    email: "bruno.oliveira@example.com",
  },
  {
    name: "Carla Mendes",
    email: "carla.mendes@example.com",
  },
  {
    name: "Diego Souza",
    email: "diego.souza@example.com",
  },
  {
    name: "Eduarda Lima",
    email: "eduarda.lima@example.com",
  },
];

async function main() {
  for (const asset of assets) {
    await prismaClient.assets.upsert({
      where: { name: asset.name },
      update: {},
      create: {
        name: asset.name,
        currentValue: asset.currtentValue,
      },
    });
  }

  for (const client of clients) {
    await prismaClient.clients.upsert({
      where: { email: client.email },
      update: {},
      create: {
        name: client.name,
        email: client.email,
        status: "ATIVO",
      },
    });
  }
}

main()
  .then(() => {
    console.log("Assets seeded successfully.");
  })
  .catch((error) => {
    console.error("Error seeding assets:", error);
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
