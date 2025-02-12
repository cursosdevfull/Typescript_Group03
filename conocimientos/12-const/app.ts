const routes = Object.freeze({
  admin: "/admin",
  home: "/home",
  report: "/report",
});

//routes.admin = "/ADMINISTRATOR";

function getRoute(route: "/admin" | "/home" | "/report") {
  console.log("route selected", route);
}

getRoute(routes.admin);

//routes.admin = "/ADMINISTRATOR"

//type Route = (typeof routes)[keyof typeof routes];

/* const fullName: string = "Juan Pérez";

type Name = typeof fullName;
const username: Name = "Luis";

const age: number = 30;

type Age = typeof age;
const userAge: Age = 50; */

/* const route: Route = {
  admin: "/admin",
  home: "/home",
  report: "/report",
}; */

/* function getRoute(route: Route) {
  console.log("route selected", route);
}

getRoute("/home"); */
