import { connectDB, seedPIData } from '../config/db.js';

const runPISeed = async () => {
  try {
    console.log('🔐 Starting PI seeding...');

    const connection = await connectDB();
    if (!connection.success) {
      throw new Error(connection.message);
    }

    console.log('✅ Database connected successfully');

    const result = await seedPIData();
    
    if (result.success) {
      console.log('\n✅ PI seeding completed successfully!');
      console.log(`📊 Summary: Created ${result.count} PIs with their project assignments`);
      console.log('\n🎯 Final Result:');
      console.log('  - PIUser1: 4 projects (J4E89B2F, H9A53C7D, G2D71E5A, F6C28A4B)');
      console.log('  - PIUser2: 3 projects (A9F41C3E, B7E82A9D, C3D15F6B)'); 
      console.log('  - PIUser3: 3 projects (D8A94E2C, E1B37D9F, K7D12F6A)');
      console.log('  - All PIs have password: 123456');
      console.log('  - Username is now used as primary key instead of principalInvestigatorKey');
    } else {
      console.error('❌ PI seeding failed:', result.message);
      if (result.error) {
        console.error('Error details:', result.error);
      }
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ PI seeding failed:', error);
    process.exit(1);
  }
};

runPISeed();