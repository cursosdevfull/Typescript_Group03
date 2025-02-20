class Person {
    constructor(public name: string, public age: number, public email: string) { }
}

type PersonKeys = keyof Person
//   ^?

const key: PersonKeys = "name"

function getPersonProperty(person: Person, prop: PersonKeys) {
    return person[prop]
}

const person = new Person("John", 30, "jhon.doe@email.com")

const personName = getPersonProperty(person, "name")

console.log("personName", personName)