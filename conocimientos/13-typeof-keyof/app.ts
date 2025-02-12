const routes = {
  admin: "/admin",
  home: "/home",
  report: "/report",
  user: "/user",
  login: "/login",
} as const;

console.log(routes);

type MyRoutes = typeof routes;
//   ^?

type variable = keyof typeof routes;
//   ^?

type Route = (typeof routes)[keyof typeof routes];
//   ^?

function getRoute(route: Route) {
  console.log("route selected", route);
}

getRoute(routes.admin);

/* function getRoute(route: "/admin" | "/home" | "/report") {
  console.log("route selected", route);
}

getRoute(routes.report);
 */
