import React from "react";
import DeleteBtn from "./DeleteBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import getCourses from "@/app/controllers/getCourses";


export default async function CoursesList() {
  const courses = await getCourses();
  const getproduct =  () => { {courses?.map((course) => {
    var text = JSON.stringify(course.Product, function (key, value) {
      if (key == "value") {
       console.log(value)
        return this.value;
        
        
      } else {
        return this.value;
      }
    });
     
}
  );}
}
  return (
    <>
    <div className="courses-list">
      {courses?.map((course) => {
        return (
          <div className="course" key={course.id}>
            <div className="course-details">
            <p>Full Name</p>
            
           
            <div className="course-details">
              <h4 className="course-title">{course.fullname}</h4>
              </div>
            </div>
              
              
            <div className="course-details">
            <p>Email</p>
            
           
            <div className="course-details">
              <h4 className="course-title">{course.email}</h4>
              </div>

              </div>
         
              
              <div className="course-details">
            <p>number</p>
            
           
            <div className="course-details">
              <h4 className="course-title">{course.number}</h4>
              </div>

              </div>
              
              <div className="course-details">
            <p>State:</p>
            
           
            <div className="course-details">
              <h4 className="course-title">{course.selectedState}</h4>
              </div>

              </div>
              
              <div className="course-details">
            <p>City</p>
            
           
            <div className="course-details">
              <h4 className="course-title">{course.city}</h4>
              </div>

              </div>
                   
            <div className="course-details">
            <p>address</p>
            
           
            <div className="course-details">
              <h6 className="course-title">{course.adder}</h6>
              </div>

              </div>
              
              <div className="course-details">
            <p>Points</p>
            
           
            <div className="course-details">
              <h4 className="course-title">{course.points}</h4>
              </div>

              </div>
         
              
              <div className="course-details">
            <p>Product</p>
            
           
            <div className="course-details">
              <h6 className="course-title" id="myvalue">{JSON.stringify(course.Product, null, " ")} 
              {getproduct()}
              </h6>
              </div>

              </div>
         
            <div className="course-actions">
              <DeleteBtn id={course._id} />
              <Link
                className="edit"
                href={`/edit-course/${course._id}`}
                title="Edit"
              >
                <HiPencilAlt size={32} />
              </Link>
              <Link href={`/courses/${course._id}`} title="View ">
                <AiOutlineEye size={32} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
</>
  );
}
