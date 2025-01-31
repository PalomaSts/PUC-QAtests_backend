import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => { 
  try { 
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000,
      socketTimeoutMS: 20000,
    }); 
    console.log(`MongoDB connected: ${conn.connection.host}`); 
  } catch (err) { 
    console.error(`Error: ${err.message}`); 
    process.exit(1); 
  }
};

export default connectDB;