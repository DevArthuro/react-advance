import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json([
    {
      id: 1,
      userName: "carlos",
    },
    {
      id: 2,
      userName: "Micke",
    },
    {
      id: 3,
      userName: "Jack",
    },
  ]);
}
