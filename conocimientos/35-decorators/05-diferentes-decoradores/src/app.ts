function Book(props: { selector: string, isUpper: boolean }) {
  return function (target: new (...args: any[]) => any) {
    const el = document.querySelector(props.selector)!;
    const instance = new target();

    if (instance) {
      el.innerHTML = "<h1>" + (props.isUpper ? instance.title.toUpperCase() : instance.title.toLowerCase()) + "</h1>";
    }

  }
}

function Log(prefix: string) {
  return function (target: any, propertieKey: string) {
    console.log("target", target)
    console.log("propertieKey", propertieKey)

    let value: string = ""

    const getter = () => {
      return value
    }

    const setter = (newValue: string) => {
      value = prefix + " " + newValue
    }

    Object.defineProperty(target, propertieKey, {
      get: getter,
      set: setter
    })

  }
}


@Book({
  selector: "#app",
  isUpper: true
})
class Product {
  @Log("Libro")
  title = "Curso de JavaScript"
}