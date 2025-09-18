import { connectDB, seedProjectsData, disconnectDB } from '../config/db.js';

const runSeedProjects = async () => {
  try {
    console.log('📦 Seeding projects...');

    const connection = await connectDB();
    if (!connection.success) {
      throw new Error(connection.message);
    }

    const result = await seedProjectsData();
    if (result.success) {
      console.log(`✅ ${result.message} (${result.count} projects)`);
    } else {
      console.error('❌ Failed to seed projects:', result.message, result.error);
    }

    await disconnectDB();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during project seeding:', error);
    process.exit(1);
  }
};

runSeedProjects();
