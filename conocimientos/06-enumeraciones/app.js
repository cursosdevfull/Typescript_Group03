"use strict";
var Currency;
(function (Currency) {
    Currency["PEN"] = "PEN";
    Currency["USD"] = "USD";
    Currency["EUR"] = "EUR";
})(Currency || (Currency = {}));
const course = {
    title: "Curso de Typescript",
    description: "Aprende Typescript",
    premium: true,
    students: 20,
    teacher: "Carlos Pérez",
    duration: 50,
    requeriments: ["Conocimientos básicos de programación", "Ganas de aprender"],
    prices: [
        [Currency.PEN, 600],
        [Currency.USD, 200],
    ],
};
course.students = 80;
const title = document.getElementById("title");
title.innerHTML = course.title;
const list = document.getElementById("list");
const pricesList = document.getElementById("prices");
for (const req of course.requeriments) {
    const li = document.createElement("li");
    li.textContent = req;
    list.append(li);
}
for (const price of course.prices) {
    const li = document.createElement("li");
    li.textContent = `${price[0]} - ${price[1]}`;
    pricesList === null || pricesList === void 0 ? void 0 : pricesList.append(li);
}
