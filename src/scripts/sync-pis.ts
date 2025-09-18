import { PrismaClient } from "../../generated/prisma/index.js";
import axios from "axios";

const prisma = new PrismaClient();

interface PIFromAPI {
  username: string;
  projects: string[];
}

const syncPIsAndRelations = async () => {
  console.log("🚀 Starting synchronization of PIs and their projects...");

  let pisFromApi: PIFromAPI[];
  try {
    const apiUrl = `http://10.150.10.221:9000/api/internal/all-pis`;
    console.log(`📡 Fetching data from source: ${apiUrl}`);

    const response = await axios.get(apiUrl, {
      headers: { "x-internal-api-key": "123" },
      timeout: 10000,
    });

    if (!response.data || !response.data.success) {
      throw new Error(
        "API call to PI backend was not successful or returned invalid data."
      );
    }

    pisFromApi = response.data.pis;
    console.log(`✅ Successfully fetched ${pisFromApi.length} PIs from the source API.`);
  } catch (error) {
    const axiosError = error as any;
    console.error("❌ FATAL: Could not fetch data from PI backend. Aborting sync.");
    if (axiosError.response) {
      console.error(`   - Status: ${axiosError.response.status}`);
      console.error(`   - Data:`, axiosError.response.data);
    } else {
      console.error(`   - Error: ${axiosError.message}`);
    }
    process.exit(1);
  }

  try {
    await prisma.$transaction(async (tx) => {
      console.log("🔄 Starting database transaction to sync local PI data...");

      const allApiUsernames = pisFromApi.map((p) => p.username);

      const deleteResult = await tx.pI.deleteMany({
        where: { username: { notIn: allApiUsernames } },
      });
      if (deleteResult.count > 0) {
        console.log(`🗑️  Deleted ${deleteResult.count} stale PIs.`);
      }

      for (const pi of pisFromApi) {
        await tx.pI.upsert({
          where: { username: pi.username },
          update: {},
          create: { username: pi.username },
        });
      }
      console.log(
        `✅ PI table synchronized. Total PIs in DB now match source: ${pisFromApi.length}.`
      );

      const deletedRelations = await tx.pIProjectRelation.deleteMany({});
      if (deletedRelations.count > 0) {
        console.log(
          `🧹 Cleared ${deletedRelations.count} old PI-Project relations to prepare for rebuild.`
        );
      }

      const allTargetRelations = pisFromApi.flatMap((pi) =>
        pi.projects.map((projectCode) => ({
          username: pi.username,
          projectCode: projectCode,
        }))
      );

      if (allTargetRelations.length > 0) {
        await tx.pIProjectRelation.createMany({
          data: allTargetRelations,
          skipDuplicates: true,
        });
      }
      console.log(
        `🔗 PI-Project relations synchronized. Created ${allTargetRelations.length} new links.`
      );
    });

    console.log(
      "✅ Synchronization successful! Local database is now in sync with the source."
    );
  } catch (error) {
    console.error(
      "❌ An error occurred during the database transaction. Sync failed and was rolled back.",
      error
    );
  } finally {
    await prisma.$disconnect();
  }
};

syncPIsAndRelations();
