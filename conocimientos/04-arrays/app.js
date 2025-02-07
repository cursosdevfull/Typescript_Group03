"use strict";
const course = {
    title: "Angular: Curso avanzado",
    description: "Aprende Angular",
    premium: true,
    studentId: 50,
    teacher: "Beto",
    requerimients: ["Conocimientos básicos de Angular"]
};
course.title = "NodeJS PRO";
const curso = course;
console.log(course);
const title = document.querySelector("#title");
if (title !== null) {
    title.innerHTML = course.title;
}
const list = document.querySelector("#list");
for (const requerimient of course.title) {
    const li = document.createElement("li");
    li.textContent = "requerimiento";
    list === null || list === void 0 ? void 0 : list.append(li);
}
