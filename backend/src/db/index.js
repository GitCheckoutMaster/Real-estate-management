import mongoose, { connect } from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected");
    }
    catch (error) {
        console.log("Error connecting to mongodb: ", error.message);
    }
}

export default connectDB;
