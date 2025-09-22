import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import os from "os";
import { initCronJobs } from "./services/cronJobs.js";

dotenv.config({ path: "/opt/presencedb/.env" });

console.log("Environment variables loaded:", {
  iit_AUTH_BASE_URL: process.env.iit_AUTH_BASE_URL,
  iit_AUTH_ENDPOINT: process.env.iit_AUTH_ENDPOINT,
  iit_AUTH_TIMEOUT: process.env.iit_AUTH_TIMEOUT,
  iit_AUTH_RETRIES: process.env.iit_AUTH_RETRIES,
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT,
});

import attendanceRoutes from "./routes/attendance.route.js";
import userRoutes from "./routes/user.route.js";
import calendarRoutes from "./routes/calendar.route.js";
import locationRoutes from "./routes/userLocation.route.js";
import profileRoute from "./routes/profile.route.js";
import piRoute from "./routes/pi.routes.js";
import hrRoute from "./routes/hr.route.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use(express.json());

const uploadsPath = path.join(
  __dirname,
  "..",
  process.env.UPLOAD_DIR || "Uploads",
);
app.use("/uploads", express.static(uploadsPath));
app.use(express.static(uploadsPath));

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend server is running",
    timestamp: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK", uptime: process.uptime() });
});

app.use("/api", userRoutes);
app.use("/api", attendanceRoutes);
app.use("/api", calendarRoutes);
app.use("/api", locationRoutes);
app.use("/api", profileRoute);
app.use("/api", piRoute);
app.use("/api", hrRoute);

const PORT = parseInt(process.env.PORT || "3000", 10);

function getLocalIPv4() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "localhost";
}

async function startServer() {
  try {
    const dbConnection = await connectDB();
    if (!dbConnection.success) {
      console.error("Failed to connect to database:", dbConnection.message);
      process.exit(1);
    }
    console.log("✅ Database connected successfully");

    initCronJobs();

    const localIP = getLocalIPv4();

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`\n🚀 Server running on http://0.0.0.0:${PORT}`);
      console.log(`📱 API available at http://${localIP}:${PORT}/api`);
      console.log(`📁 Uploads served from: ${uploadsPath}`);

      console.log("\n=== Available API Endpoints ===");
      console.log("\n🔐 Authentication:");
      console.log(`  POST http://${localIP}:${PORT}/api/login`);
      console.log(`  GET  http://${localIP}:${PORT}/api/user/:employeeNumber`);

      console.log("\n📅 Attendance:");
      console.log(`  POST http://${localIP}:${PORT}/api/attendance`);
      console.log(`  POST http://${localIP}:${PORT}/api/attendance/checkout`);
      console.log(
        `  GET  http://${localIP}:${PORT}/api/attendance/today/:username`,
      );
      console.log(
        `  GET  http://${localIP}:${PORT}/api/attendance/calendar/:employeeNumber`,
      );

      console.log("\n📆 Calendar:");
      console.log(`  GET  http://${localIP}:${PORT}/api/calendar`);
      console.log(`  GET  http://${localIP}:${PORT}/api/calendar/holidays`);

      console.log("\n🔧 PI:");
      console.log(
        `  GET  http://${localIP}:${PORT}/api/admin/users-attendance`,
      );
      console.log(
        `  GET  http://${localIP}:${PORT}/api/admin/users-attendance`,
      );
      console.log(
        `  GET  http://${localIP}:${PORT}/api/admin/users-attendance`,
      );

      console.log("================================\n");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
