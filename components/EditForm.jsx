"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function EditForm({ course }) {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(course.points);
  async function handleSubmit(e) {
    e.preventDefault();
    const newCourse = {
      newTitle,
    };
    const response = await fetch(
      `https://ewaste-admin.vercel.app/api/courses/${course._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      }
    );
    if (response.status == 201) {
      router.push("/");
      router.refresh();
    }
    console.log(newCourse);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Course title"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
       <button type="submit">Update Points </button>
    </form>
  );
}
