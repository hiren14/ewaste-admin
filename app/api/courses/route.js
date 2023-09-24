import mongoDBConnect from "@/libs/mongodb";
import EwasteInfo from "@/models/ewaste-info";
import { NextResponse } from "next/server";

// GET ALL COURSES
export async function GET(request) {
  try {
    // Connect to the DB
    await mongoDBConnect();
    //get the data using the model
    const courses = await EwasteInfo.find();
    return NextResponse.json(
      {
        message: "Ok",
        data: courses,
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

//Create a Course
export async function POST(request) {
  try {
    //Get the data from the request
    const { title} = await request.json();
    const newCourse = {
      title,

    };
    // Connect to the DB
    await mongoDBConnect();
    //Use the Model to create
    await EwasteInfo.create(newCourse);
    return NextResponse.json(
      {
        message: "Course created successfully",
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

// DELETE A COURSE
export async function DELETE(request) {
  try {
    //Get the Id of the course
    const id = request.nextUrl.searchParams.get("id");
    //Connect to db
    await mongoDBConnect();
    //Use the model to delete
    await EwasteInfo.findByIdAndDelete(id);
    //return the response
    return NextResponse.json(
      {
        message: "Course deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Delete a Course",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
