import { addHoliday, connectDB } from '../config/db.js';

const holidays = [
  { date: new Date("2025-01-14"), description: "Magh Bihu" },
  { date: new Date("2025-03-31"), description: "Id-ul-Fitr" },
  { date: new Date("2025-04-10"), description: "Mahavir Jayanti" },
  { date: new Date("2025-04-14"), description: "Likely compensatory holiday" },
  { date: new Date("2025-04-15"), description: "Bohag Bihu" },
  { date: new Date("2025-04-18"), description: "Good Friday" },
  { date: new Date("2025-04-20"), description: "Easter Sunday" },
  { date: new Date("2025-05-12"), description: "Buddha Purnima" },
  { date: new Date("2025-08-15"), description: "Independence Day" },
  { date: new Date("2025-09-05"), description: "Prophet Mohammad's Birthday (Id-e-Milad)" },
  { date: new Date("2025-09-30"), description: "Likely Mahanavami eve" },
  { date: new Date("2025-10-01"), description: "Mahanavami" },
  { date: new Date("2025-10-02"), description: "Mahatma Gandhi's Birthday / Dussehra" },
  { date: new Date("2025-10-20"), description: "Diwali" },
  { date: new Date("2025-11-05"), description: "Guru Nanak's Birthday" },
  { date: new Date("2025-12-25"), description: "Christmas Day" },
];

const seedHolidays = async () => {
  try {
    console.log('🎉 Adding Indian holidays for 2025...');
    
    
    await connectDB();
    
    let successCount = 0;
    let errorCount = 0;

    for (const holiday of holidays) {
      try {
        const result = await addHoliday(holiday.date, holiday.description);
        if (result.success) {
          console.log(`✅ ${result.message}`);
          successCount++;
        } else {
          console.log(`❌ Failed to add ${holiday.description}: ${result.message}`);
          errorCount++;
        }
      } catch (error) {
        console.error(`❌ Error adding ${holiday.description}:`, error);
        errorCount++;
      }
    }

    console.log(`\n📊 Summary: ${successCount} holidays added, ${errorCount} errors`);
    process.exit(0);
    
  } catch (error) {
    console.error('❌ Failed to seed holidays:', error);
    process.exit(1);
  }
};

seedHolidays();