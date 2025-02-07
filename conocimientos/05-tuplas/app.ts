const course = {
    title: "Angular: Curso avanzado",
    description: "Aprende Angular",
    premium: true,
    studentId: 50,
    teacher: "Beto",
    requerimients: ["Conocimientos básicos de Angular"],
    price: [
        ["PEN", 500],
        ["DOLAR", 300]
    ]
}

course.title = "NodeJS PRO"

const curso = course

course.price.push(["task 1", 600])
course.price.push(["prueba3", 500])
course.price.push(["prueba4", 500, "active"])

console.log(course)
