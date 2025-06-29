const Course = ({ course }) => {
  return (
    <p>
      {course.name} {course.exercises}
    </p>
  );
};

export default Course;
