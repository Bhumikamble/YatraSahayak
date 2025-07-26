import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Resolve __dirname (since you are using ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from root directory
dotenv.config({
  path: path.resolve(__dirname, "../../.env")
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`✅ Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed !!!", err);
  });
