"use strict";
/*const routes = {
  admin: "/admin",
  home: "/home",
  report: "/report",
} as const; */
const routes = Object.freeze({
    admin: "/admin",
    home: "/home",
    report: "/report",
});
//routes.admin = "/administrator"
function getRoute(route) {
    console.log("route selected", route);
}
getRoute(routes.report);
