import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";

// Load environment variables
dotenv.config({
    path: ".env"
});

// Connect to MongoDB
connectDB()
.then(() => {
    // Start the server
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server running on port: ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error(`Server startup error: ${error.message}`);
    process.exit(1);
});

