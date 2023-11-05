{
  const addingStudentWithCourse = <
    T extends { name: string; roll: string; email: string }
  >(
    student: T
  ) => {
    const course: string = "Programming Hero";
    return {
      ...student,
      course,
    };
  };

  const student1 = addingStudentWithCourse({
    name: "mahamudul hasan abir",
    roll: "19-40986-2",
    email: "mhabir10@gmail.com",
  });

  console.log(student1);
}
