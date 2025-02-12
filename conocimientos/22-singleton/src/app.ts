class Database {
  random = Math.floor(Math.random() * 1000);
  static instance: Database;

  private constructor() {}

  static createInstance() {
    if (!Database.instance) {
      this.instance = new Database();
      //Database.instance = this.instance;
    }
    return this.instance;
  }
}

const database1 = Database.createInstance();
const database2 = Database.createInstance();

console.log("Random1 value: ", database1.random);
console.log("Random2 value: ", database2.random);

class UserService {
  private static instance: UserService;
  private users: string[] = [];

  private constructor() {}

  static getInstance() {
    if (!UserService.instance) {
      this.instance = new UserService();
    }
    return this.instance;
  }

  createUser(name: string) {
    this.users.push(name);
  }

  getUsers() {
    return [...this.users];
  }
}

const userService1 = UserService.getInstance();
const userService2 = UserService.getInstance();
const userService3 = UserService.getInstance();

userService1.createUser("John Doe");
userService2.createUser("Jane Doe");
userService3.createUser("John Snow");

console.log("Users1: ", userService3.getUsers());
