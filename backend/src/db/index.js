import mongoose from 'mongoose';
import { dbname } from '../constants.js';

// Connect to MongoDB
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${dbname}`);
        console.log(`\nMongoDB connected: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`MONGO DB Connection Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;