import { connectDB, seedBasicCalendar, disconnectDB } from '../config/db.js';

const runSeedCalendar = async () => {
  try {
    console.log('🗓️ Seeding basic calendar (weekends)...');

    const connection = await connectDB();
    if (!connection.success) {
      throw new Error(connection.message);
    }

    const result = await seedBasicCalendar();
    if (result.success) {
      console.log(`✅ ${result.message} (${result.count} weekend dates)`);
    } else {
      console.error('❌ Failed to seed calendar:', result.message, result.error);
    }

    await disconnectDB();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during calendar seeding:', error);
    process.exit(1);
  }
};

runSeedCalendar();
