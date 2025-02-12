enum Currency {
  PEN = "PEN",
  USD = "USD",
  EUR = "EUR",
}

const course: {
  title: string;
  description: string;
  premium: boolean;
  students: number;
  duration: number;
  requeriments: string[];
  teacher: string;
  prices: Array<[Currency, number]>;
} = {
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

const title = document.getElementById("title")!;
title.innerHTML = course.title;

const list = document.getElementById("list")!;
const pricesList = document.getElementById("prices");

for (const req of course.requeriments) {
  const li = document.createElement("li");
  li.textContent = req;
  list.append(li);
}

for (const price of course.prices) {
  const li = document.createElement("li");
  li.textContent = `${price[0]} - ${price[1]}`;
  pricesList?.append(li);
}
