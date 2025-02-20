type TConfig = {
  selector: string;
  template: string;
}

function Component(config: TConfig) {
  return function (constructor: new (...args: any[]) => any) {
    console.log("Rendering component...")
    console.log("Selector: ", config.selector)
    const el = document.querySelector(config.selector)!;

    if (el) {
      const instance = new constructor()
      el.innerHTML = config.template;
      el.querySelector("h1")!.textContent = instance.name;
    }
  }
}

function NewLogger(logString: string) {
  return function (constructor: Function) {
    console.log("Rendering function")
    console.log(logString);
    console.log(constructor);
  }
}


@Component({
  selector: "#app",
  template: "<h1>Hello World</h1>"
})
@NewLogger("LOGGING - PERSON")
class Person {
  name = "John Doe";

  constructor() {
    console.log("Person object created");
  }
}

const person = new Person()