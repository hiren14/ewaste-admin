import mongoose, { Schema, models } from "mongoose";

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      required: true,
      type: String,
      default: "Admin",
    }
  },
  { timestamps: true }
);

const Admin = models.Admin || mongoose.model("Admin", adminSchema);
export default Admin;
