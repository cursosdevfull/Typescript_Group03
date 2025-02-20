type VerbsSpecial2 = "GET" | "POST" | "PUT" | "DELETE"
type WithBodySpecial2 = Extract<VerbsSpecial2, "POST" | "PUT">

const routesApp: Record<VerbsSpecial2, string> = {
    "GET": "/users",
    "POST": "/users",
    "PUT": "/users/1",
    "DELETE": "/users/2",
}

type DetailRoute = {
    path: string,
    component: string
}

type Route = Record<VerbsSpecial2, DetailRoute>
//  ^?

const appRoutes: Route = {
    "GET": { path: "/users", component: "Users" },
    "POST": { path: "/users", component: "Users" },
    "PUT": { path: "/users/1", component: "User" },
    "DELETE": { path: "/users/2", component: "User" }
}