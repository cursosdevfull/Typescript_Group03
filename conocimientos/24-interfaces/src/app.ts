interface IPerson {
  name: string;
  lastname: string;
  age: number;
  isAdult(): boolean;
}

const person: IPerson = {
  name: 'John',
  lastname: 'Doe',
  age: 30,
  isAdult() {
    return this.age >= 18;
  }
}