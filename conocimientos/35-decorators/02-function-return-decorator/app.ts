function NewLogger(message: string) {
    return function (constructor: Function) {
        console.log(message)
        console.log(constructor)
    };
}


@NewLogger("Logging - Person")
class Person {
    name = "John";

    constructor() {
        console.log("My name is " + this.name);
    }
}

const person = new Person(); // My name is John