"use strict";
const makeAnArray = (x, y) => {
    return [y, x];
};
const dugdugi = makeAnArray("Abir", "Kobir");
console.log(dugdugi);
const addCourseWithStundet = (student) => {
    const course = "Programming Hero";
    return Object.assign(Object.assign({}, student), { course });
};
const student1 = addCourseWithStundet({
    name: "Abir",
    email: "mhabir10@gmail.com",
    watch: "appe",
});
