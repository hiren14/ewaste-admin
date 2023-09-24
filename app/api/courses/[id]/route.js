import mongoDBConnect from "@/libs/mongodb";
import EwasteInfo from "@/models/ewaste-info";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    // Connect to the DB
    await mongoDBConnect();
    //get the data using the model
    const course = await EwasteInfo.findOne({ _id: id });
    return NextResponse.json(
      {
        message: "Ok",
        data: course,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch Courses",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

//Update/EDITING a Course
export async function PUT(request, { params: { id } }) {
  try {
    //Get the data from the request
    const { newTitle: points } =
      await request.json();
    const newCourse = {
      points,
     
    };
    // Connect to the DB
    await mongoDBConnect();
    //Use the Model to update
    await EwasteInfo.findByIdAndUpdate(id, newCourse);
    return NextResponse.json(
      {
        message: "Course Updated successfully",
        data: newCourse,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Create a Course",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
