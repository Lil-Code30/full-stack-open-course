const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      {course.parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
      <h4>
        Total of{" "}
        {course.parts.reduce((sum, part) => {
          return sum + part.exercises;
        }, 0)}{" "}
        exercises
      </h4>
    </div>
  );
};

export default Course;
