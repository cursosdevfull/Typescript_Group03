class User {
  readonly userId: number;
  private name: string;
  private age: number;
  private email: string;
  private password: string;

  constructor(name: string, age: number, email: string, password: string) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;

    this.userId = new Date().getTime();
  }

  public print() {
    console.log(`User: ${this.name}, email: ${this.email}`);
  }

  properties() {
    return {
      name: this.name.toUpperCase(),
      age: this.age,
      email: this.email,
    };
  }
}

const user = new User("John", 30, "john@email.com", "123456");
console.log(user);
//console.log(user.password);
//user.userId = 10
console.log("userId", user.userId);
user.print();
console.log("properties", user.properties());
