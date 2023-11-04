const makeAnArray = (x: string, y: string): string[] => {
  return [y, x];
};

const dugdugi = makeAnArray("Abir", "Kobir");
console.log(dugdugi);

const addCourseWithStundet = <T>(student: T) => {
  const course = "Programming Hero";
  return {
    ...student,
    course,
  };
};

const student1 = addCourseWithStundet({
  name: "Abir",
  email: "mhabir10@gmail.com",
  watch: "appe",
});
