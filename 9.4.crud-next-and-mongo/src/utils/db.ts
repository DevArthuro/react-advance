import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};

export async function connectDb() {
  if (conn.isConnected) return;
  const db = await connect("mongo://localhost/nextmongoDB");
  console.log(db.connection.db?.databaseName);
  conn.isConnected = db.connections[0].readyState.toString() === "1";
}

connection.on("connected", () => {
  console.log("mongoose is connected");
});

connection.on("error", (error) => {
  console.log(`mongoose connection error ${error}`);
});
