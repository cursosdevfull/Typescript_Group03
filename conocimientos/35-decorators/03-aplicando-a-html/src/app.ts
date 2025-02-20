type TConfig = {
  selector: string;
  template: string;
}

function Component(config: TConfig) {
  return function (constructor: new (...args: any[]) => any) {
    const el = document.querySelector(config.selector)!;

    if (el) {
      const instance = new constructor()
      el.innerHTML = config.template;
      el.querySelector("h1")!.textContent = instance.name;
    }
  }
}


@Component({
  selector: "#app",
  template: "<h1>Hello World</h1>"
})
class Person {
  name = "John Doe";

  constructor() {
    console.log("Person object created");
  }
}