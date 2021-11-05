import mongoose from "mongoose";

// const connection = {};

const dbConnect = async () => {
    // if (connection.isConnected) {
    //     return;
    // }

    const db = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    db.on("error", (err) => console.error("connection error", err)); // 連線異常
    db.once("open", (db) => console.log("Connected to MongoDB")); // 連線成功

    // connection.isConnected = db.connection._readyState;
};

export default dbConnect;
