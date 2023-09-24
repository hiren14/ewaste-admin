import mongoDBConnect  from "@/libs/mongodb";
import Admin from "@/models/admin";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await mongoDBConnect();
    const { email } = await req.json();
    const user = await Admin.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
