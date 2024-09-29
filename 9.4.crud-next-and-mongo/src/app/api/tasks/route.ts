import TaskModel from "@/models/task";
import { connectDb } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await connectDb();

  const tasks = await TaskModel.find();
  return NextResponse.json(tasks);
}

export async function POST(req: NextRequest, {}) {
  await connectDb();

  const body = await req.json();

  try {
    const newTask = new TaskModel(body);

    const saved = await newTask.save();

    return NextResponse.json(saved);
  } catch (error) {
    if (!body?.title || !body?.description)
      return NextResponse.json(
        {
          message: "Cannot provided the fields required\ntitle or description",
        },
        { status: 400 }
      );

    if ((error as { code: number })?.code === 11000)
      return NextResponse.json(
        {
          message: "Task already exists",
        },
        { status: 400 }
      );

    return NextResponse.json(
      {
        message: "Cannot create the task",
      },
      { status: 400 }
    );
  }
}
