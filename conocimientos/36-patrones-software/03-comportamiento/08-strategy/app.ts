import { ProfessorSearch, Strategy, StudentSearch, TBook } from "./strategy";

const student = new StudentSearch()
const professor = new ProfessorSearch()
const researcher = new ProfessorSearch()

const strategy = new Strategy()

const foundBook01 = strategy.findBookByRole(student, "NodeJS")
if (!foundBook01) {
    throw new Error("Book not found");
}
const book01: TBook = foundBook01;
console.log("Student", book01);

const foundBook02 = strategy.findBookByRole(professor, "NodeJS")
if (!foundBook02) {
    throw new Error("Book not found");
}
const book02: TBook = foundBook02;
console.log("Professor", book02);

const foundBook03 = strategy.findBookByRole(researcher, "NodeJS")
if (!foundBook03) {
    throw new Error("Book not found");
}
