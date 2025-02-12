class Dog {
  breed: string;
  color: string;
  size: string;

  constructor(breed: string, color: string, size: string) {
    this.breed = breed;
    this.color = color;
    this.size = size;
  }

  bark() {
    console.log("Woof! Woof!");
  }

  run() {
    console.log("The dog is running");
  }

  eat() {
    console.log("The dog is eating");
  }

  sleep() {
    console.log("The dog is sleeping");
  }
}

const dog = new Dog("Siberian Husky", "White", "Large");
dog.breed = "Poodle";
console.log(dog.breed); // Poodle
console.log(dog.color); // Brown
console.log(dog.size); // Medium

dog.bark(); // Woof! Woof!
dog.run(); // The dog is running
dog.eat(); // The dog is eating
dog.sleep(); // The dog is sleeping

const dog2 = new Dog("Beagle", "Brown, Black", "Medium");
console.log(dog2.breed); // Beagle
