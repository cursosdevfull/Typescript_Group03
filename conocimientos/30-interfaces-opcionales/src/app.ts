interface WithName {
  readonly name: string
  outputName?: string
}

interface WithGreetings extends WithName {
  greet(phrase: string): void
}

class Person implements WithGreetings {
  name: string;
  outputName?: string

  constructor(name: string, output?: string){
    this.name = name
    this.outputName = output
  }
  greet(phrase: string): void {
       if(this.outputName) {
      console.log(`Hi, I'm ${this.name}`)
    }
  }

/*   greet(phrase: string): void {
    if(this.outputName) {
      console.log(`Hi, I'm ${this.name}`)
    }
  } */
}

const person = new Person('John')
person.greet('Hello')