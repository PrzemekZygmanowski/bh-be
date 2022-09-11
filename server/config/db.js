import mongoose from 'mongoose';

const connectDB = async () => {
  const MONGO_URI = `mongodb+srv://przemek:kozQ30SNiwTddgMv@cluster0.vjsrrbz.mongodb.net/bh?retryWrites=true&w=majority`;
  const conn = await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
  });
  console.log(`mongo connected ${conn.connection.host}`.cyan);
};
export default connectDB;
