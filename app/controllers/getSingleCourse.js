export default async function getSingleCourse(id) {
  try {
    const response = await fetch(`https://ewaste-admin.vercel.app/api/courses/${id}`, {
      cache: "no-store",
    });
    const course = await response.json();
    return course.data;
  } catch (error) {
    console.log(error);
  }
}
