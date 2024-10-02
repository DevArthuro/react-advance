import taskModel from "@/models/task";
import { connectDb } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params: { id } }: Params) {
  await connectDb();

  try {
    if (!id) throw new Error("Id is not provided");
    const task = await taskModel.findById(id);
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          (error as Error)?.message ?? `Cannot search the task with id ${id}`,
        error: true,
      },
      { status: 400 }
    );
  }
}

export async function PUT(req: NextRequest, { params: { id } }: Params) {
  await connectDb();
  const body = await req.json();

  try {
    if (Object.keys(body).length === 0) throw Error("Not provided fields");
    const taskUpdated = await taskModel.findByIdAndUpdate(id, body, {
      new: true,
    });

    return NextResponse.json(taskUpdated);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          (error as Error)?.message ?? `Cannot update the task with id ${id}`,
        error: true,
      },
      { status: 400 }
    );
  }
}

export async function DELETE(req: NextRequest, { params: { id } }: Params) {
  await connectDb();

  try {
    const deletedTask = await taskModel.findByIdAndDelete(id);
    return NextResponse.json(deletedTask);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          (error as Error)?.message ?? `Cannot delete the task with id ${id}`,
        error: true,
      },
      { status: 400 }
    );
  }
}
