import {initializeDatabase } from '../config/db.js';

const runSeed = async () => {
  try {

    await initializeDatabase();

    console.log('✅ Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

runSeed();