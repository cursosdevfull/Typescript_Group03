"use strict";
const routes = {
    admin: "/admin",
    home: "/home",
    report: "/report",
    user: "/user",
    login: "/login",
};
console.log(routes);
//   ^?
function getRoute(route) {
    console.log("route selected", route);
}
getRoute(routes.admin);
/* function getRoute(route: "/admin" | "/home" | "/report") {
  console.log("route selected", route);
}

getRoute(routes.report);
 */
