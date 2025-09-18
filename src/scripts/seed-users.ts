import { connectDB, syncUsersFromAPI, disconnectDB } from '../config/db.js';

const runSeedUsers = async () => {
  try {
    console.log('👥 Syncing users from API...');

    const connection = await connectDB();
    if (!connection.success) {
      throw new Error(connection.message);
    }

    const result = await syncUsersFromAPI();
    if (result.success) {
      console.log('✅ Users synced successfully:', result.results);
    } else {
      console.error('❌ Failed to sync users:', result.message, result.error);
    }

    await disconnectDB();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error during user sync:', error);
    process.exit(1);
  }
};

runSeedUsers();
