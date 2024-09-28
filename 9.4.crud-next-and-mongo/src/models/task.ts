import { Schema, model, models } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El titulo es requerido"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "La descripcion es requerida"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Task || model("Task", taskSchema);
