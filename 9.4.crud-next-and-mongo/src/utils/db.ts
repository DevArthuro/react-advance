import { connect, connection } from "mongoose";

const MONGO_URL = process.env.MONGO_URL ?? "";

const conn = {
  isConnected: false,
};

export async function connectDb() {
  if (conn.isConnected) return;
  const db = await connect(MONGO_URL, {});
  console.log(db.connections[0].readyState);
  // When is connected don´t make reconnection
  conn.isConnected = db.connections[0].readyState === 1;
}

connection.on("connected", () => {
  console.log("mongoose is connected");
});

connection.on("error", (error) => {
  console.log(`mongoose connection error ${error}`);
});
