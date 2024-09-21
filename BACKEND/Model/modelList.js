import { model, Schema } from "mongoose";

const listSchema = new Schema(
  {
    text: { type: String, required: true },
  },
  { versionKey: false }
);

export default model("List", listSchema);
