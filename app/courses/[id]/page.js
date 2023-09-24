import getSingleCourse from "@/app/controllers/getSingleCourse";
import React from "react";

export default async function ViewCourse({ params: { id } }) {
  const course = await getSingleCourse(id);
  return (
    <div className="detail-page">
      <h1>User Detail Page</h1>
      <hr />
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
              </h6>
              </div>

              </div>
         
           
          </div>
    </div>
  );
}
