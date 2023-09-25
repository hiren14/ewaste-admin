export default async function getCourses() {
  try {
    const response = await fetch("https://ewaste-admin.vercel.app/api/courses", {
      cache: "no-store",
    });
    const courses = await response.json();
    return courses.data;
  } catch (error) {
    console.log(error);
  }
}
