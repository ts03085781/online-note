import mongoose from "mongoose";

const dbConnect = async () => {
    const db = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    db.on("error", (err) => console.error("connection error [連線異常]", err)); // 連線異常
    db.once("open", (db) => console.log("Connected to MongoDB [連線成功]")); // 連線成功
};

export default dbConnect;
