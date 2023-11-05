"use strict";
{
    const addingStudentWithCourse = (student) => {
        const course = "Programming Hero";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addingStudentWithCourse({
        name: "mahamudul hasan abir",
        roll: "19-40986-2",
        email: "mhabir10@gmail.com",
    });
    console.log(student1);
}
