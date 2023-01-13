import mongoose from "mongoose";

const { Schema } = mongoose;

const pageSchema = new Schema({ name: String, any: Schema.Types.Mixed });

export const Page = mongoose.models.Page || mongoose.model("Page", pageSchema);
