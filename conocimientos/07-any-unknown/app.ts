let course: any;

course = true;
course = 1;
course = "Typescript";
course = [1, 2, 3];
course = { name: "Typescript" };
course = null;

let user: unknown;

user = "Typescript";

if (typeof user === "string") {
  console.log("string", user.toUpperCase());
}

if (typeof user === "object") {
  console.log("object", (user as { name: string }).name);
}
