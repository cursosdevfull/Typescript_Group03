function Logger(constructor: new (...args: any[]) => any) {
    console.log("Logging...");
    console.log(constructor)

    const instance = new constructor();
    console.log("Instance created...");
    instance.name = "Debora"
    console.log("name", instance.name)
}


@Logger
class Person {
    name = "John";

    constructor() {
        console.log("My name is " + this.name);
    }
}

const person = new Person(); // My name is John