import { connectDb } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET() {
  connectDb();
  return NextResponse.json({ message: "The db is connecting" });
}
